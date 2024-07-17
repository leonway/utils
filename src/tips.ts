import { getLanguage } from './utils'

interface InternatinoalLangConfig {
  'en-US': string
  'zh-CN': string
}
interface Tips {
  [prop: string]: InternatinoalLangConfig
}

const tips: Tips = {
  'request.fail': {
    'en-US': 'Request Failed',
    'zh-CN': '请求失败'
  },
  'network.err': {
    'en-US': 'Network Error',
    'zh-CN': '网络异常'
  },
  'login.invalid': {
    'en-US': '您的登录状态已失效，请重新登录',
    'zh-CN': '您的登录状态已失效，请重新登录'
  }
}

export const getTips = (key: string) => {
  const lang = getLanguage() as any as keyof InternatinoalLangConfig
  const tipItemKey = Object.keys(tips).find(
    (k) => k === key
  ) as any as keyof typeof tips
  if (!tipItemKey) {
    return null
  }
  const tip = tips[tipItemKey][lang] || null
  return tip
}
