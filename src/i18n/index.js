
import { createI18n } from "vue-i18n"
import enLocale from './en' // 导入项目中用到的英文语言包
import zhLocale from './zh'// 导入项目中用到的中文语言包

const messages = {
  en: {
    ...enLocale,
  },
  zh: {
    ...zhLocale,
  },
 
}
 
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('i18n'), // 设置语种
  messages, // 设置全局当地语言包,
  fallbackLocale: 'zh',
})
 
export default i18n