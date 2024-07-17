export declare const exportFile: ({ data, url, filename }: {
    data?: Blob;
    url?: string;
    filename?: string;
}) => boolean;
export declare const hasOwnProperties: (obj: object, keys: Array<string | number>) => boolean;
export declare const getLanguage: () => string;
/**
 * 输入 v1,v2
 * 返回
 * 1 代表v1 > v2
 * -1 代表v1 < v2
 * 0 代表v1 = v2
 */
export declare function versionCompare(version1: any, version2: any): 0 | 1 | -1;
