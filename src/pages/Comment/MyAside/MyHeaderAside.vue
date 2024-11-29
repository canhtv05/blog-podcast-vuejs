<script setup>
import { useListStoryStore } from '@/stores/stories';

const { indexList, handleShowItemByIndex } = useListStoryStore();

const { time_post, time_read, title } = handleShowItemByIndex(indexList);
</script>

<template>
  <div
    class="all-stories__content-item--info-wrapper__posting-time-wrapper d-flex justify-content-between align-items-center"
  >
    <div class="d-flex justify-content-start align-items-center">
      <div class="d-flex align-items-center">
        <span class="all-stories__content-item--info-wrapper__posting-time-wrapper__text-header">{{ time_post }}</span>
        <span class="all-stories__content-item--info-wrapper__posting-time-wrapper__desc-bgc"></span>
        <span class="all-stories__content-item--info-wrapper__posting-time-wrapper__reading-time">{{ time_read }}</span>
      </div>
    </div>
    <div class="all-stories__content-item--info-wrapper__posting-time-wrapper__icon-ellipsis">
      <img src="/src/components/svg/ellipsis-icon.svg" alt="icon-ellipsis" loading="lazy" />
    </div>
  </div>
  <h2 class="text-left title">{{ title }}</h2>
  <strong class="mt-5 d-block span1" style="font-weight: 700"
    >Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to
    continue reading.</strong
  >
  <div class="p-3"></div>
  <span class="span2"
    >Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s
    current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends,
    news, and more.
  </span>
  <div class="p-4"></div>
</template>

<style scoped lang="scss">
@use '/src/assets/global.scss' as *;

.all-stories__content-item--info-wrapper__posting-time-wrapper {
  margin-bottom: 1.2rem;
  height: 3.4rem;
  font-size: 1.2rem;
}

.all-stories__content-item--info-wrapper__posting-time-wrapper__text-header {
  font-size: 1.4rem;
  font-family: 'avenir lt', sans-serif;
}

.all-stories__content-item--info-wrapper__posting-time-wrapper__desc-bgc {
  background-color: $black-color;
  width: 0.2rem;
  height: 0.2rem;
  margin: 0 0.8rem;
}

.all-stories__content-item--info-wrapper__posting-time-wrapper__reading-time {
  font-size: 1.4rem;
  font-family: 'avenir lt', sans-serif;
}

.all-stories__content-item--info-wrapper__posting-time-wrapper__icon-ellipsis {
  width: 1.9rem;
  height: 1.9rem;
  cursor: pointer;
}

.title {
  font-size: 5rem;
}

.span1,
.span2 {
  font-family: 'avenir lt', sans-serif;
  font-size: 1.5rem;
}

@media (max-width: 992px) {
  .title {
    font-size: 3.8rem;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 2.7rem;
  }
}

@media (max-width: 576px) {
  .title {
    font-size: 2.7rem;
  }
}
</style>
