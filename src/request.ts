import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  CreateAxiosDefaults,
} from 'axios';
import { parse, stringify } from 'qs';
import { getTips } from './tips';

const defaultValue = {
  loginInvalidCode:[10002],
  successCode:[200],
  codeKey:"code",
  messageKey:"message",
  headerTokenKey:"Authorization",
  headerTokenValueMaker:(token:string)=>`Bearer ${token}`
}

let loginInvalidModal;

export interface ErrorMessage {
  message: string;
  description: string;
}

export interface LoginInvalidWarn {
  title: string;
  onOk: () => void;
}

export type Request = ((url: string, options?: AxiosRequestConfig) => any) & {
  showloginInvalidModal: () => void;
};
interface CreateRequestOptions {
  getToken: () => string;
  redirectLogin: () => void;
  redirectNotFound: () => void;
  axiosCreateOptions?: CreateAxiosDefaults<any>;
  showError: (data: ErrorMessage) => void;
  loginInvalidWarn: (config: LoginInvalidWarn) => any;
  codeKey?:string;
  messageKey?:string;
  headerTokenKey?:string;
  headerTokenValueMaker?:(token:string)=>string
  setInstance?: (instance: AxiosInstance) => void;
  NoTokenUrls?: string[];
  loginInvalidCode?:(string|number)[]
  successCode?:(string|number)[]
}

export const createRequest = (
  options: CreateRequestOptions = {
    NoTokenUrls: [],
    axiosCreateOptions: {},
    getToken: () => '',
    redirectLogin: () => {},
    redirectNotFound:()=>{},
    setInstance: (instance: AxiosInstance) => {},
    showError: (data: ErrorMessage) => {},
    loginInvalidWarn: (config) => {},
    loginInvalidCode:defaultValue.loginInvalidCode,
    successCode:defaultValue.successCode,
    codeKey:defaultValue.codeKey,
    messageKey:defaultValue.messageKey,
    headerTokenKey:defaultValue.headerTokenKey,
    headerTokenValueMaker:defaultValue.headerTokenValueMaker
  },
): Request => {
  const {
    NoTokenUrls=[],
    axiosCreateOptions={},
    getToken,
    redirectLogin,
    setInstance,
    showError,
    loginInvalidWarn,
    redirectNotFound=()=>{},
    loginInvalidCode=defaultValue.loginInvalidCode,
    successCode=defaultValue.successCode,
    codeKey=defaultValue.codeKey,
    messageKey=defaultValue.messageKey,
    headerTokenKey=defaultValue.headerTokenKey,
    headerTokenValueMaker=defaultValue.headerTokenValueMaker,
  } = options;
  if(!getToken){
    throw new Error('createRequest:function getToken is required!')
  }
  if(!redirectLogin){
    throw new Error('createRequest:function redirectLogin is required!')
  }
  if(!showError){
    throw new Error('createRequest:function showError is required!')
  }
  if(!loginInvalidWarn){
    throw new Error('createRequest:function loginInvalidWarn is required!')
  }

  const showloginInvalidModal = () => {
    if (!loginInvalidModal) {
      loginInvalidModal = loginInvalidWarn({
        title: getTips('login.invalid'),
        onOk() {
          loginInvalidModal = undefined;
          redirectLogin();
        },
      });
    }
  };

  const instance = axios.create({
    // timeout: 1000,
    headers: {},
    validateStatus(status: number) {
      if (status === 403) {
        redirectNotFound()
      }
      if (status === 401) {
        redirectLogin();
      }
      return status >= 200 && status < 300; // 默认值
    },
    paramsSerializer: {
      encode: parse,
      serialize: stringify,
    },
    ...axiosCreateOptions,
  });

  // 添加请求拦截器
  instance.interceptors.request.use(
    (config) => {
      // 在发送请求之前做些什么
      // console.log('request config', Date.now());
      if (!NoTokenUrls.includes(config.url!)) {
        const token = getToken();
        if (!token) {
          showloginInvalidModal();
          throw new Error('loginInvalid');
        }
        config.headers[headerTokenKey] = headerTokenValueMaker(token);
      }
      // console.log('request',config);

      return config;
    },
    (error) => {
      // 对请求错误做些什么
      console.log('request error', error);
      return Promise.reject(error);
    },
  );

  // 添加响应拦截器
  instance.interceptors.response.use(
    (response) => {
      const { data, config } = response;
      // console.log('response', response);
      /**
       *如果响应的data 确定是 所有业务接口统一响应的json数据结构 BusinessJson
       *  code === 1 说明请求业务接口返回状态正常 直接返回data.data
       *  code !==1 直接抛错
       */
      const isJson = !config.responseType || config.responseType === 'json';
      const isBlob = config.responseType === 'blob';

      if (
        isJson &&
        data instanceof Object
        // && hasOwnProperties(data, BusinessJsonKeys)
      ) {
        if (successCode.includes(data[codeKey])) {
          return data.data;
        }
        if (loginInvalidCode.includes(data[codeKey])) {
          showloginInvalidModal();
          throw new Error('loginInvalid');
        }
        throw new Error(data[messageKey]);
      }

      // 如果是blob 那么就返回 形如 { data,filename } 的数据类型 data 是blob   filename 是后台设置好的文件名（如果有的话）
      if (isBlob && data instanceof Blob) {
        const contentDisposition =
          response.headers['content-disposition'] || '';
        const temp =
          (decodeURI(contentDisposition).split(';')[1] || '').split('=')[1] ||
          '';
        const filename = temp.split("''")[1] || '';
        return {
          data,
          filename,
        };
      }

      /**
       * 如果响应的data 不是业务接口业务接口统一响应的json数据结构
       * 那么直接返回data
       */
      return data;
    },
    (error) => {
      // 超出 2xx 范围的状态码都会触发该函数。
      // 对响应错误做点什么
      console.log('response error', error);
      return Promise.reject(error);
    },
  );

  setInstance?.(instance);

  const request: Request = (
    url: string,
    options: AxiosRequestConfig = {},
  ): any => {
    return instance
      .request({
        url,
        ...options,
      })
      .catch((err) => {
        console.log('request error', err, options);

        if (axios.isCancel(err)) {
          // 如果是主动取消的不用报错
          console.log('Request canceled', err.message);
          throw err;
        }
        const isLoginInvalid = err.message === 'loginInvalid';
        const isNetWorkError = err.message === 'Network Error';
        if (!isLoginInvalid) {
          showError({
            message: getTips('request.fail'),
            description: isNetWorkError ? getTips('network.err') : err.message,
          });
        }

        throw err;
      });
  };
  request.showloginInvalidModal = showloginInvalidModal;
  return request;
};
