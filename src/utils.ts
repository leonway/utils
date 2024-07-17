export const exportFile = ({
  data,
  url,
  filename
}: {
  data?: Blob
  url?: string
  filename?: string
}) => {
  const download = (href: string) => {
    const a = document.createElement('a')
    a.href = href
    if (filename) {
      a.download = filename
    }
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  if (url) {
    download(url)
    return true
  }

  if (data instanceof Blob) {
    const link = window.URL.createObjectURL(data)
    download(link)
    window.URL.revokeObjectURL(link)
    return true
  }
  return false
}

export const hasOwnProperties = (obj: object, keys: Array<string | number>) =>
  !keys.some((key) => !Object.prototype.hasOwnProperty.call(obj, key))

export const getLanguage = () => {
  const lang = localStorage.getItem('language') || window.navigator.language
  const region = lang.split('-')[0] as keyof typeof langMap
  const langMap = { zh: 'zh-CN', en: 'en-US' }

  if (['zh', 'en'].indexOf(region) > -1) {
    return langMap[region]
  }
  return langMap.en
}


/**
 * 输入 v1,v2
 * 返回
 * 1 代表v1 > v2
 * -1 代表v1 < v2
 * 0 代表v1 = v2
 */
export function versionCompare(version1, version2) {
  const arr1 = version1.split('.')
  const arr2 = version2.split('.')
  const length1 = arr1.length
  const length2 = arr2.length
  const minlength = Math.min(length1, length2)
  let i = 0
  for (i; i < minlength; i++) {
    let a = parseInt(arr1[i])
    let b = parseInt(arr2[i])
    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    }
  }
  if (length1 > length2) {
    for (let j = i; j < length1; j++) {
      if (parseInt(arr1[j]) != 0) {
        return 1
      }
    }
    return 0
  } else if (length1 < length2) {
    for (let j = i; j < length2; j++) {
      if (parseInt(arr2[j]) != 0) {
        return -1
      }
    }
    return 0
  }
  return 0
}
