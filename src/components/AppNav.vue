<template>
  <nav class="nav container">
    <!-- logo -->
    <a href="#" class="nav__logo">cosycosy</a>

    <div :class="['nav__menu',menuShow ? 'nav__menu--show' : '']">
      <ul class="nav__list grid">
        <li class="nav__item" v-for="item in menuList" :key="item.name">
          <a :href="item.href" class="nav__link">
            <i class="alicon nav__icon" :class="[item.icon]"></i>
            <p>{{ $t(item.name) }}</p>
          </a>
        </li>

        <li class="nav__item">
          <div class="nav__link">
            <i class="alicon alicon-fanyi1 nav__icon nav__icon--translate"
              @click="changeLanguage"></i>
            <a class="nav__link" id="translate">中/en</a>
          </div>
        </li>
      </ul>
      <i class="alicon alicon-guanbijiantou nav__close nav__icon" @click="menuShow = false"></i>
    </div>

    <div class="nav__btns">
      <i :class="['alicon', theme === 'dark' ? 'alicon-taiyang' : 'alicon-moon', 'nav__theme']"
        id="theme-button" @click="toggleTheme">
      </i>
      <div class="nav__toggle" @click="menuShow = true">
        <i class="alicon alicon-apps"></i>
      </div>
    </div>
  </nav>
</template>

<script>
import { useThemeState } from '@/store'
import { useI18n } from "vue-i18n";
import { ref } from 'vue'

export default {
  name: 'AppNav',
  setup() {
    // 主题
    const themeState = useThemeState()
    // 响应式移动端时 点击菜单图标
    const menuShow = ref(false)
    // 菜单列表
    const menuList = ref([
      {
        name: 'home',
        href: '#home',
        icon: 'alicon-zhuye',
      },
      {
        name: 'about',
        href: '#about',
        icon: 'alicon-user',
      },
      {
        name: 'skills',
        href: '#skills',
        icon: 'alicon-yuzhijineng',
      },
      {
        name: 'portfolio',
        href: '#portfolio',
        icon: 'alicon-wodezuopin',
      },
      {
        name: 'blog',
        href: 'https://cosycosy.cn',
        icon: 'alicon-zhuanyeyukecheng',
      },
      {
        name: 'contact',
        href: '#contact',
        icon: 'alicon-lianxi',
      },
    ])
    // 切换语言
    const { locale } = useI18n()
    const changeLanguage = () => {
      locale.value = locale.value === 'zh' ? 'en' : 'zh' 
      localStorage.setItem('i18n',locale.value)
    }

    return { ...themeState, menuShow, menuList, changeLanguage }
  },
}
</script>

<style lang="scss" scoped>
.nav {
  max-width: 968px;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include min-screen(768px) {
    height: calc(var(--header-height) + 1.5rem);
    column-gap: 1rem;
  }
  #translate {
    @include min-screen(768px) {
      font-size: 0;
    }
  }
  &__logo {
    color: var(--title-color);
    font-weight: var(--font-medium);
  }
  &__menu {
    &--show {
      bottom: 0 !important;
    }
    @include min-screen(768px) {
      margin-left: auto;
    }
    @include max-screen(767px) {
      position: fixed;
      bottom: -100%;
      left: 0;
      width: 100%;
      background-color: var(--body-color);
      padding: 2rem 1.5rem 4rem;
      box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
      border-radius: 1.5rem 1.5rem 0 0;
      transition: 0.3s;
    }
    @include max-screen(350px) {
      padding: 2rem 0.25rem 4rem;
    }
  }
  &__list {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    @include max-screen(350px) {
      column-gap: 0;
    }
    @include min-screen(768px) {
      display: flex;
      column-gap: 2rem;
    }
  }
  &__item {
    align-items: center;
    @include min-screen(768px) {
      align-content: center;
      display: flex;
      flex-wrap: wrap;
    }
  }
  &__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--small-font-size);
    color: var(--title-color);
    font-weight: var(--font-medium);
    cursor: pointer;
    text-transform: capitalize;
    &:hover {
      color: var(--first-color);
      svg {
        fill: var(--first-color);
      }
    }
  }
  &__btns {
    display: flex;
    align-items: center;
  }
  &__toggle {
    color: var(--title-color);
    font-weight: var(--font-medium);
    font-size: 1.1rem;
    cursor: pointer;
    @include min-screen(768px) {
      display: none;
    }
    &:hover {
      color: var(--first-color);
    }
  }
  &__close {
    position: absolute;
    right: 1.3rem;
    bottom: 0.5rem;
    cursor: pointer;
    color: var(--first-color);
    &:hover {
      color: var(--first-color-alt);
    }
    @include min-screen(768px) {
      display: none;
    }
  }
  &__icon {
    font-size: 1.2rem;
    &--translate {
      @include min-screen(768px) {
        display: block !important;
        font-size: 1.5rem;
      }
    }
    @include min-screen(768px) {
      display: none;
    }
  }
  &__theme {
    font-size: 1.2rem;
    color: var(--title-color);
    margin-right: var(--mb-1);
    cursor: pointer;
    &:hover {
      color: var(--first-color);
    }
    @include min-screen(768px) {
      font-size: 1.4rem;
    }
  }
}
</style>