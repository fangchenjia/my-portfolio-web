<template>
  <section class="skills section" id="skills">
    <h2 class="section__title skills__title"><i class="alicon alicon-daima skills__icon"></i>{{ $t("skills__title") }}</h2>
    <span class="section__subtitle">{{ $t("skills__subtitle") }}</span>

    <div class="skills__container container grid">
      <div>
        <div class="skills__content">

          <div class="skills__list grid">
            <div v-for="skill in skills" :key="skill.title">
              <div class="skills__titles">
                <h3 class="skills__name">{{ skill.title }}</h3>
              </div>
              <div class="skills__bar">
                <div class="skills__percentage" :style="`width: ${skill.percentage}`"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {ref} from 'vue'
export default {
  name: "AppSkills",
  setup() {
    const skills = ref([
      {
        title: 'html',
        percentage: '70%'
      },
      {
        title: 'css',
        percentage: '50%'
      },
      {
        title: 'js',
        percentage: '70%'
      },
      {
        title: 'vue',
        percentage: '80%'
      },
      {
        title: 'threejs',
        percentage: '30%'
      },
      {
        title: 'node',
        percentage: '60%'
      }
    ])
    return {skills}
  }
}
</script>
<style lang="scss" scoped>
.skills {
  &__container {
    row-gap: 0;
  }
  &__header {
    display: flex;
    align-items: center;
    margin-bottom: var(--mb-2-5);
    cursor: pointer;
  }
  &__icon {
    font-size: 2rem;
    color: var(--first-color);
    margin-right: var(--mb-0-75);
  }
  &__title {
    margin-bottom: var(--mb-0-75);
  }
  &__titles {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--mb-0-5);
  }
  &__subtitle {
    font-size: var(--small-font-size);
    color: var(--text-color-light);
  }
  &__list {
    row-gap: 1.5rem;
    padding: 0 2.7rem;
    transition: 0.4s;
  }
  &__name {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
  }
  &__bar {
    background-color: var(--first-color-lighter);
  }
  &__percentage {
    height: 5px;
    border-radius: 0.25rem;
    display: block;
    background-color: var(--first-color);
  }
}
</style>