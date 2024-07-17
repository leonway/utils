# utils 工具函数库

## 目录

```
├── public
│   ├── assets                    // 浏览器串口icon
├── src                           // 源码
│   ├── index.ts                  // 入口文件
│   ├── request.ts                // 请求函数
│   ├── tips                      // 国际化提示信息
│   ├── utils.ts                  // 其他工具函数

```

## request

基于 axios 封装了 http(s)请求工具函数。

### 默认响应拦截器处理逻辑：

如果响应的数据是 json 那么根据初始化配置解析参数 .

如果响应的数据是二进制文件 那么默认当作下载文件处理
将响应头里的`content-disposition`字段解析出文件名`filename`
并将响应的二进制文件转换为 Blob
最终返回

```typescript

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
```

| 属性名                   | 属性值类型                     | 是否必填 | 默认值                              | 含义                                                                                     |
| ------------------------ | ------------------------------ | -------- | ----------------------------------- | ---------------------------------------------------------------------------------------- |
| getToken                 | ()=>string                     | 是       | -                                   | 获取 token                                                                               |
| redirectLogin            | ()=>void                       | 是       | -                                   | 登录失效触发                                                                             |
| redirectNotFound         | ()=>void                       | 是       | -                                   | http403 触发                                                                             |
| showError                | (data:ErrorMessage)=>void      | 是       | -                                   | 请求报错触发                                                                             |
| loginInvalidWarn         | (config:LoginInvalidWarn)=>any | 是       | -                                   | 登录失效触发                                                                             |
| NoTokenUrls              | string[]                       | 否       | []                                  | 不需要鉴权的接口集合                                                                     |
| headerTokenKey           | string                         | 否       | Authorization                       | 鉴权请求头里的 key 值                                                                    |
| headerTokenValueMaker    | (token:string)=>string         | 否       | (token:string)=>\`Bearer ${token}\` | 鉴权请求头里的 value 生成函数                                                            |
| codeKey                  | string                         | 否       | code                                | responese.data 为 json 时（通用业务响应结构体）,判断请求业务层面响应状态的属性 默认 code |
| messageKey                  | string                         | 否       | message                                | responese.data 为 json 时（通用业务响应结构体）,业务层面响应的消息 默认 messsage |
| successCode              | (string&#124;number)[]         | 否       | [200]                               | 判断 data[codeKey]请求是否成功的标志  如果不成功触发 showError |
| loginInvalidCode         | (string&#124;number)[]         | 否       | [10002]                             | 判断 data[codeKey]登录 是否成功的标志 如果不成功触发 loginInvalidWarn |
| setInstance | (instance: AxiosInstance) => {} | 否 | - | 重写 axios 实例的勾子函数 |
| axiosCreateOptions | CreateAxiosDefaults<any> | 否 | {} | 自定义 axios 通用配置 |

### 使用 demo

```typescript
// 初始化
import { createRequest } from '@rokid-library/utils'
import { getModelState } from '@renderer/store'
import { localStoreKeys } from '@shared/local-store'
import { Modal, notification } from 'antd'
import { redirectLogin } from './utils'
const NoTokenUrls = ['/auth/oauth/token']
const request = createRequest({
  NoTokenUrls,
  getToken: () => getModelState('common')?.localStorage?.[localStoreKeys.token] || '',
  showError: notification.error,
  redirectLogin,
  redirectNotFound: () => (window.location.href = '/404'),
  loginInvalidWarn: Modal.warn,
  axiosCreateOptions: {
    baseURL: 'https://xxx.rokid.com/api',
  },
  // successCode:[200], // 如果跟默认值相同可以不传
  loginInvalidCode: [20006, 20005, 20002, 20001, 20000, 401],
})

export default request
```

```typescript
// 定义接口
import request from '@renderer/utils/request'

interface LoginData {
  usename: string
  password: string
}

export const login = (data: LoginData) => {
  const realData = {
    ...data,
    grant_type: 'xxx',
    client_id: 'xxx',
    client_secret: 'xxx',
  }
  const formData = new FormData()
  Object.entries(realData).forEach(([key, value]) => formData.append(key, value))
  return request('/auth/oauth/token', {
    method: 'POST',
    data: formData,
  })
}

export const download = () => {
  return request('platform/v1/transfer/download', {
    method: 'POST',
    responseType: 'blob',
    data: { projectId: 'xxx', projectName: '大同市博物馆' },
  })
}
```

```jsx
//使用接口
import { download } from '@renderer/api/common'
import { exportFile } from '@rokid-library/utils'

<Button
  onClick={async () => {
    try {
      const data = await download()
      exportFile(data)
      console.log('data', data)
    } catch (error) {
      console.log('error', error)
    }
  }}>
  test
</Button>
```

### 开发

```
pnpm dev
```

### 发布

```
pnpm build
```
