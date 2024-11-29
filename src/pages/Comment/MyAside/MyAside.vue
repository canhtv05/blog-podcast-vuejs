<script setup>
import { useListStoryStore } from '@/stores/stories';
import MyMainAside from './MyMainAside.vue';

const { indexList, handleShowItemByIndex } = useListStoryStore();

const { img_path, title } = handleShowItemByIndex(indexList);
</script>

<template>
  <div class="w-100 mb-5">
    <div>
      <img :src="img_path" :alt="title" loading="lazy" class="img-fluid shadow my-img w-100" />
    </div>
    <MyMainAside />
  </div>
</template>

<style lang="scss" scoped>
@use '/src/assets/global.scss' as *;

.my-img {
  border-radius: 1rem;
}
</style>
