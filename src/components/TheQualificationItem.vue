<template>
  <div class="qualification__data" v-for="(item,index) in list" :key="index">
    <template v-if="index % 2 === 1">
      <div></div>
      <div>
        <span class="qualification__rounder"></span>
        <span v-if="index !== list?.length - 1 " class="qualification__line"></span>
      </div>
    </template>
    <div>
      <h3 class="qualification__title" >
        {{ $t(item.title || '') }}
      </h3>
      <span class="qualification__subtitle">
        {{ $t(item.describe || '') }}
      </span>
      <div class="qualification__calendar">
        <i class="alicon alicon-rili"></i>
        {{ $t(item.time || '') }}
      </div>
    </div>
    <template v-if="index % 2 === 0">
      <div>
        <span class="qualification__rounder"></span>
        <span v-if="index !== list?.length - 1 " class="qualification__line"></span>
      </div>
      <div></div>
    </template>

  </div>
</template>
<script>
export default {
  name: 'TheQualificationItem',
  props: {
    list: {
      type: Array
    }
  }
}
</script>
<style lang="scss" scoped>
.qualification {
  &__data {
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    column-gap: 1.5rem;
    @include max-screen(350px) {
      gap: 0.5rem;
    }
  }
  &__title {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
  }
  &__subtitle {
    display: inline-block;
    font-size: var(--small-font-size);
    margin-bottom: var(--mb-1);
  }
  &__calendar {
    font-size: var(--smaller-font-size);
    color: var(--text-color-light);
  }
  &__rounder {
    display: inline-block;
    width: 13px;
    height: 13px;
    background-color: var(--first-color);
    border-radius: 50%;
  }
  &__line {
    display: block;
    width: 1px;
    height: 100%;
    background-color: var(--first-color);
    transform: translate(6px, -7px);
  }
}
</style>