// store.js
import { createGlobalState, useStorage } from '@vueuse/core'

export const useThemeState = createGlobalState(
  () => {
    /*==================== vueuse案例 ====================*/
    // // state
    // const count = ref(0)

    // // getters
    // const doubleCount = computed(() => count.value * 2)

    // // actions
    // function increment() {
    //   count.value++
    // }

    // return { count, doubleCount, increment }

    // theme数据储存本地
    const theme = useStorage('theme','dark',localStorage)
    // 初始化主题
    document.body.setAttribute('data-theme',theme.value)
    // 切换主题
    function toggleTheme() {
      theme.value = theme.value === 'light' ? 'dark' : 'light'
      document.body.setAttribute('data-theme',theme.value)
    }

    return {theme,toggleTheme}
  }
)

