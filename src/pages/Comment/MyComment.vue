<script setup>
import MyArticle from './MyArticle/MyArticle.vue';
import MyAside from './MyAside/MyAside.vue';
import MyHeaderAside from './MyAside/MyHeaderAside.vue';
import MySubCommentAside from './MyAside/MySubCommentAside.vue';
</script>

<template>
  <div class="my-container">
    <div class="row">
      <div class="col-md-8 ps-5 pe-5">
        <MyHeaderAside />
      </div>
      <div class="col-md-4"></div>
    </div>
    <div class="row">
      <div class="col-md-8 ps-5 pe-5">
        <MyAside />
      </div>
      <div class="col-md-4">
        <MyArticle />
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <MySubCommentAside />
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '/src/assets/global.scss' as *;

.my-container {
  @include widthSession();
  width: 65%;
  margin-top: 8rem;
  margin: auto;
}

@media (max-width: 576px) {
  .my-container {
    width: 100%;
  }
}
</style>
