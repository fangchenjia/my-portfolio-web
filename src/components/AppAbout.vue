<template>
  <section class="about section" id="about">
    <h2 class="section__title" >{{ $t('about__title') }}</h2>
    <span class="section__subtitle" >{{ $t('about__subtitle') }}</span>
    <div class="about__container container grid">
      <img src="/img/portfolio3.jpg" class="about__img">

      <div class="about__data">
        <p class="about__description">
          {{ $t('about__description') }}
        </p>

        <div class="about__info">
          <div>
            <span class="about__info-title">23</span>
            <span class="about__info-name" >{{ $t('about__info-name1') }}</span>
          </div>

          <div>
            <span class="about__info-title">01+</span>
            <span class="about__info-name" >{{ $t('about__info-name2') }}</span>
          </div>
          <div>
            <span class="about__info-title"></span>
            <span class="about__info-name" ></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  &__container {
    @include min-screen(568px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include min-screen(768px) {
      column-gap: 5rem; 
    }
  }
  &__data {
    max-width: 344px;
  }
  &__img {
    width: 200px;
    border-radius: 0.5rem;
    justify-self: center;
    align-self: center;
    @include min-screen(768px) {
      width: 350px;
    }
  }

  &__description {
    text-align: center;
    margin-bottom: var(--mb-2-5);
    @include min-screen(768px) {
      text-align: initial;
    }
  }

  &__info {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: var(--mb-2-5);
    @include min-screen(768px) {
      justify-content: space-between;
    }
  }

  &__info-title {
    font-size: var(--h2-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--title-color);
    margin-bottom: var(--mb-0-5);
  }

  &__info-name {
    font-size: var(--smaller-font-size);
  }

  &__info-title,
  &__info-name {
    display: block;
    text-align: center;
  }

}
</style>