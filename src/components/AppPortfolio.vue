<template>
  <section class="portfolio section" id="portfolio">
    <h2 class="section__title">{{ $t('portfolio__title') }}</h2>
    <span class="section__subtitle">{{ $t('portfolio__subtitle') }}</span>

    <div class="portfolio__container container swiper-container">
      <swiper class="swiper" :modules="modules" :slides-per-view="1" :space-between="30"
        :loop="true" :pagination="{ clickable: true }" navigation>
        <swiper-slide v-for="(item,index) in portfolioList" :key="index">
          <div class="portfolio__content grid swiper-slide">
            <img :src="item.img" alt="" class="portfolio__img" />

            <div class="portfolio_">
              <h3 class="portfolio__title" i18n="portfolio1__title">
                {{ $t(item.title) }}
              </h3>
              <p class="portfolio__description" i18n="portfolio1__description">
                {{ $t(item.describe) }}
              </p>
              <a :href="item.url" target="_blank"
                class="button button--flex button--small portfolio__button">
                Demo
                <i class="alicon alicon-zhixiangyou button__icon"></i>
              </a>
            </div>
          </div>

        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script>
import { defineComponent,ref } from 'vue'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default defineComponent({
  name: 'AppPortfolio',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const portfolioList = ref([
      {
        url: '',
        title: 'portfolio1__title',
        describe: 'portfolio1__description',
        img: '/img/portfolio1.jpg'
      },
      {
        url: '',
        title: 'portfolio2__title',
        describe: 'portfolio2__description',
        img: '/img/portfolio2.jpg'
      }
    ])
    return {
      modules: [Pagination, Navigation],
      portfolioList
    }
  },
})
</script>

<style lang="scss" scoped>
.portfolio {
  &__container {
    overflow: initial;
  }

  &__content {
    padding: 0 1.5rem;
    @include min-screen(568px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include min-screen(768px) {
      align-items: center;
    }
    @include min-screen(1024px) {
      column-gap: 5rem;
    }
  }

  &__img {
    width: 265px;
    border-radius: 0.5rem;
    justify-self: center;
    @include min-screen(768px) {
      width: 320px;
    }
  }

  &__title {
    font-size: var(--h3-font-size);
    margin-bottom: var(--mb-0-5);
  }

  &__description {
    margin-bottom: var(--mb-0-75);
  }

  &__button:hover .button__icon {
    transform: translateX(0.25rem);
  }
}
::v-deep .swiper-button-next:after, ::v-deep .swiper-button-prev:after {
  font-size: 1.5rem;
  color: var(--first-color);
}
::v-deep .swiper-pagination-bullet-active {
  background-color: var(--first-color);
}
</style>