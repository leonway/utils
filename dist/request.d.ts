import { AxiosInstance, AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
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
    codeKey?: string;
    messageKey?: string;
    headerTokenKey?: string;
    headerTokenValueMaker?: (token: string) => string;
    setInstance?: (instance: AxiosInstance) => void;
    NoTokenUrls?: string[];
    loginInvalidCode?: (string | number)[];
    successCode?: (string | number)[];
}
export declare const createRequest: (options?: CreateRequestOptions) => Request;
export {};
