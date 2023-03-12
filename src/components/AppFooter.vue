<template>
  <footer class="footer">
    <div class="footer__bg">
      <div class="footer__container container grid">
        <div>
          <h1 class="footer__title">cosycosy</h1>
          <span class="footer__subtitle" >{{ $t('home__subtitle') }}</span>
        </div>

        <ul class="footer__links">
          <li>
            <a href="#skills" class="footer__link" >{{ $t('skills') }}</a>
          </li>
          <li>
            <a href="#portfolio" class="footer__link" >{{ $t('portfolio') }}</a>
          </li>
          <li>
            <a href="#contact" class="footer__link" >{{ $t('contact') }}</a>
          </li>
        </ul>

        <div class="footer__socials">
          <a href="https://gitee.com/fangchenjia/" target="_blank">
            <i class="alicon alicon-gitee footer__social"></i>
          </a>
          <a href="http://github.com/changchenjia" target="_blank">
            <i class="alicon alicon-github footer__social"></i>
          </a>
        </div>
      </div>

      <p class="footer__copy">
        &#169; COSYCOSY.Copy from
        <a class="footer__copy" href="https://www.youtube.com/c/Bedimcode"
          target="_blank">Bedimcode</a>
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding-top: 2rem;
  &__container {
    row-gap: 3.5rem;
    @include min-screen(568px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include min-screen(768px) {
      grid-template-columns: repeat(3, 1fr);
      padding: 0 1rem;
    }
    @include min-screen(1024px) {
      padding: 0;
    }
  }

  &__bg {
    background-color: var(--first-color-second);
    padding: 2rem 0 3rem;
    @include min-screen(768px) {
      padding: 3rem 0 3.5rem;
    }
  }

  &__title {
    font-size: var(--h1-font-size);
    margin-bottom: var(--mb-0-25);
  }

  &__subtitle {
    font-size: var(--small-font-size);
  }

  &__links {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    @include min-screen(768px) {
      flex-direction: row;
      column-gap: 2rem;
    }
  }

  &__link:hover {
    color: var(--first-color-lighter);
  }

  &__social {
    font-size: 1.35rem;
    margin-right: var(--mb-1-5);
    @include min-screen(768px) {
      justify-self: flex-end;
    }
  }
  &__socials {
    @include min-screen(768px) {
      justify-self: flex-end;
    }
    
  }

  &__social:hover {
    color: var(--first-color-lighter);
  }

  &__copy {
    font-size: var(--smaller-font-size);
    text-align: center;
    color: var(--text-color-light);
    margin-top: var(--mb-3);
    @include min-screen(768px) {
      margin-top: 4.5rem;
    }
  }

  &__title,
  &__subtitle,
  &__link,
  &__social {
    color: #fff;
    fill: #fff;
  }
}
</style>