<template>
  <section class="contact section" id="contact">
    <h2 class="section__title" >{{ $t('contact__title') }}</h2>
    <span class="section__subtitle">{{ $t('contact__subtitle') }}</span>

    <div class="contact__container container grid">
      <div>
        <div class="contact__information">
          <i class="alicon alicon-lianxi contact__icon"></i>

          <div>
            <h3 class="contact__title" >{{ $t('tel') }}</h3>
            <span class="contact__subtitle">{{ $t('tel__number') }}</span>
          </div>
        </div>

        <div class="contact__information">
          <i class="alicon alicon-envelope contact__icon"></i>

          <div>
            <h3 class="contact__title" >{{ $t('email') }}</h3>
            <span class="contatc__subtitle">{{ $t('email__address') }}</span>
          </div>
        </div>

        <div class="contact__information">
          <i class="alicon alicon-map1 contact__icon"></i>

          <div>
            <h3 class="contact__title" >{{ $t('location') }}</h3>
            <span class="contatc__subtitle">{{ $t('location__detail') }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.contact {
  &__container {
    row-gap: 3rem;
    @include min-screen(568px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__information {
    display: flex;
    margin-bottom: var(--mb-2);
  }

  &__icon {
    font-size: 1.5rem;
    color: var(--first-color);
    margin-right: var(--mb-0-75);
  }

  .content__title {
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
  }

  &__subtitle {
    font-size: var(--small-font-size);
    color: var(--text-color-light);
  }

  &__content {
    background-color: var(--input-color);
    border-radius: 0.5rem;
    padding: 0.75rem 1rem 0.25rem;
  }

  &__label {
    font-size: var(--smaller-font-size);
    color: var(--title-color);
  }

  &__input {
    width: 100%;
    background-color: var(--input-color);
    color: var(--text-color);
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
    border: none;
    outline: none;
    padding: 0.25rem 0.5rem 0.5rem 0;
    @include min-screen(1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  &__form {
    width: 460px;
  }
}
</style>