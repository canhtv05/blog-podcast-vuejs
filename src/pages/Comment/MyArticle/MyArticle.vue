<template>
  <div class="h-100 div-container d-flex justify-content-center align-items-center">
    <div class="children">
      <span class="separate mt-2"></span>
      <div class="text-center about-me w-100 pt-4 pb-4">About Me</div>
      <span class="separate mt-2"></span>
      <div class="d-flex justify-content-center align-items-center pt-4">
        <img src="/src/components/imgs/comment-img1.png" alt="comment img" class="img-fluid cmt-img shadow" />
      </div>
      <p class="mt-5 text-center" style="font-size: 1.5rem">
        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click
        me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your
        users know a little more about you.
      </p>
      <div class="center-button-sm d-flex justify-content-center mt-5">
        <button class="btn podcast-container__aside--btn-read-more text-center">Read more</button>
      </div>
      <span class="separate mt-5"></span>
      <div class="text-center about-me w-100 pt-4 pb-4" style="margin-bottom: 0.5rem">#Leap of Faith</div>
      <span class="separate"></span>

      <div id="carouselExampleControls" class="carousel slide d-sm-block d-md-none" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div v-for="(img, index) in listImg" :key="index" class="carousel-item" :class="index === 0 && 'active'">
            <img :src="img" :alt="`img ${index}`" class="d-block w-100" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="d-none d-md-block mt-5 mb-5">
        <div class="row gy-4">
          <div v-for="(img, index) in listImg" :key="index" class="col-sm-4 my-img">
            <img :src="img" :alt="`img ${index}`" class="img-fluid shadow rounded" />
          </div>
        </div>
      </div>

      <span class="separate mt-5 d-block"></span>
      <div class="text-center about-me w-100 pt-4 pb-4" style="margin-bottom: 0.5rem">Posts Archive</div>
      <div class="center-button-sm d-flex justify-content-center mt-3">
        <button class="btn podcast-container__aside--btn-read-more padding-di text-center">May 2023 (6)</button>
      </div>
      <span class="separate mt-5 d-block"></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import img1 from '@/components/imgs/comment-aside1.png';
import img2 from '@/components/imgs/comment-aside2.png';
import img3 from '@/components/imgs/comment-aside3.png';
import img4 from '@/components/imgs/comment-aside4.png';
import img5 from '@/components/imgs/comment-aside5.png';
import img6 from '@/components/imgs/comment-aside6.png';

const listImg = ref([img1, img2, img3, img4, img5, img6]);
</script>

<style scoped lang="scss">
@use '/src/assets/global.scss' as *;

.div-container {
  background-color: #d6d3d6;
}

.children {
  width: calc(100% - 3rem);
  height: calc(100% - 3rem);
}

.separate {
  display: block;
  border-top: 1px solid #000;
  height: 0.5em;
}

.about-me {
  font-size: 2.2rem;
  letter-spacing: 0.5rem;
}

.cmt-img {
  width: 60%;
  border-radius: 12rem 12rem 0 0;
}

.center-button-sm {
  ~ .center-button-sm {
    margin-top: 3rem;
  }
}

.podcast-container__aside--btn-read-more {
  font-family: 'avenir lt', sans-serif;
  font-size: 1.5rem;
  width: 15.5rem;
  height: 3.4rem;
  border: 1px solid $black-color;
  border-radius: 0;
  transition:
    background 0.2s ease-in,
    color 0.2s ease-in,
    border-color 0.2s ease-in;

  &:hover {
    background-color: #4f4768;
    border-color: #4f4768;
    color: $white-color;
  }

  &.padding-di {
    height: 5rem;
  }
}

.my-img {
  cursor: pointer;
}

@media (max-width: 768px) {
  .cmt-img {
    width: 90%;
    border-radius: 20rem 20rem 0 0;
  }

  .center-button-sm {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .podcast-container__aside--btn-read-more {
    width: 18rem;
    height: 4.2rem;
  }
}
</style>
