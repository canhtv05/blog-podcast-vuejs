<template>
  <main class="container-fluid main__container">
    <!-- main banner -->
    <div class="main__banner">
      <div class="parallax-img"></div>
      <div class="main__text-container">
        <div class="text-container__header">Leap of Faith</div>
        <div class="text-container__main">Trusting God is a lifelong journey. Don’t travel alone.</div>
        <div class="text-container__footer">
          <img
            src="/src/components/svg/arrow-bottom.svg"
            alt="arrow-bottom"
            class="img-fluid text-container__footer--img"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <!-- all stories   -->
    <div class="all-stories-container container-fluid w-100 h-100">
      <h2 class="all-stories__text--header text-center">All My Stories</h2>
      <h2 class="all-stories__separate"></h2>

      <div class="container-fluid all-stories__content">
        <div class="all-stories__content-container w-100 h-100">
          <div class="row custom-gutter">
            <div
              v-for="(item, index) in listCard"
              :key="index"
              class="col-lg-4 col-md-6 col-sm-12 all-stories__content-item text-center d-flex align-content-center justify-content-center"
            >
              <div class="all-stories__content-item--img">
                <img
                  :src="item.img_path"
                  :alt="`img ${index}`"
                  loading="lazy"
                  class="all-stories__content-item--img img-fluid shadow"
                />
                <div class="all-stories__content-item--info-wrapper d-flex flex-column">
                  <!-- posting time img -->
                  <div
                    class="all-stories__content-item--info-wrapper__posting-time-wrapper d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex justify-content-start align-items-center">
                      <div class="d-flex align-items-center">
                        <span class="all-stories__content-item--info-wrapper__posting-time-wrapper__text-header">{{
                          item.time_post
                        }}</span>
                        <span class="all-stories__content-item--info-wrapper__posting-time-wrapper__desc-bgc"></span>
                        <span class="all-stories__content-item--info-wrapper__posting-time-wrapper__reading-time">{{
                          item.time_read
                        }}</span>
                      </div>
                    </div>
                    <div class="all-stories__content-item--info-wrapper__posting-time-wrapper__icon-ellipsis">
                      <img src="/src/components/svg/ellipsis-icon.svg" alt="icon-ellipsis" loading="lazy" />
                    </div>
                  </div>

                  <!-- title cards  -->
                  <div class="all-stories__content-item--info-wrapper__desc-wrapper">
                    <div class="all-stories__content-item--info-wrapper__desc-wrapper__title">
                      <p class="all-stories__content-item--info-wrapper__desc-wrapper__title--text">
                        {{ item.title }}
                      </p>
                    </div>
                    <div class="all-stories__content-item--info-wrapper__desc-wrapper__content">
                      {{ item.desc }}
                    </div>
                    <div class="all-stories__content-item--info-wrapper__desc-wrapper__separate"></div>
                    <div
                      class="all-stories__content-item--info-wrapper__desc-wrapper__comment-area d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex justify-content-start align-items-center">
                        <div class="d-flex align-items-center">
                          <span class="all-stories__content-item--info-wrapper__desc-wrapper__comment-area__text"
                            >{{ item.views_count }} views</span
                          >
                          <span class="all-stories__content-item--info-wrapper__desc-wrapper__comment-area__text"
                            >{{ item.comments_count }} comments</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about-container container-fluid">
        <span class="about-container__separate"></span>
        <h2 class="h2 text-center about-container__title">About</h2>
        <span class="about-container__separate"></span>
        <div class="m-auto about-container__div-row">
          <div class="about-container__div-row-children">
            <div class="row custom-gutter">
              <div class="col-sm-6">
                <div class="about-container__aside">
                  <p class="about-container__aside--title">
                    Hi, I'm Isabella! <br />
                    So good to have you here.
                  </p>
                  <div class="col-sm-6 d-flex justify-content-center">
                    <div class="about-container__article">
                      <img
                        src="/src/components/imgs/blog-img7.png"
                        alt=""
                        class="img-fluid about-container__article--img about-container__article--img-sm shadow"
                      />
                    </div>
                  </div>
                  <p class="about-container__aside--desc text-break">
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or
                    double click me to add your own content and make changes to the font. I’m a great place for you to
                    tell a story and let your users know a little more about you.
                  </p>
                  <div class="center-button-sm" @click="handleNavigateHome">
                    <button class="btn about-container__aside--btn-read-more text-center">Read More</button>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 d-flex justify-content-center">
                <div class="about-container__article">
                  <img
                    src="/src/components/imgs/blog-img7.png"
                    alt=""
                    class="img-fluid about-container__article--img about-container__article--img-lg shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyPodcast />
    </div>
  </main>
  <MySubscribeFooter />
</template>

<script setup>
defineOptions({
  name: 'MyHome',
});

import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import MyPodcast from './HomePodcast.vue';

import img1 from '/src/components/imgs/blog-img1.png';
import img2 from '/src/components/imgs/blog-img2.png';
import img3 from '/src/components/imgs/blog-img3.png';
import img4 from '/src/components/imgs/blog-img5.png';
import img5 from '/src/components/imgs/blog-img6.png';
import img6 from '/src/components/imgs/blog-img4.png';
import MySubscribeFooter from '@/layouts/components/MyFooter/MySubscribeFooter.vue';

const router = useRouter();

const handleNavigateHome = () => {
  router.push('/about');
};

const listCard = reactive([
  {
    img_path: img1,
    time_post: 'May 28, 2023',
    time_read: '2 min read',
    icon_ellipsis_path: '/src/components/svg/ellipsis-icon.svg',
    title: 'Is There a Wrong Way of Praying?',
    desc: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....',
    views_count: 0,
    comments_count: 0,
  },
  {
    img_path: img2,
    time_post: 'May 28, 2023',
    time_read: '1 min read',
    icon_ellipsis_path: '/src/components/svg/ellipsis-icon.svg',
    title: '5 Spiritual Disciplines to Lighten Your Load',
    desc: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....',
    views_count: 1,
    comments_count: 0,
  },
  {
    img_path: img3,
    time_post: 'May 28, 2023',
    time_read: '2 min read',
    icon_ellipsis_path: '/src/components/svg/ellipsis-icon.svg',
    title: 'How Can You Learn to Trust God?',
    desc: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....',
    views_count: 0,
    comments_count: 0,
  },
  {
    img_path: img4,
    time_post: 'May 28, 2023',
    time_read: '2 min read',
    icon_ellipsis_path: '/src/components/svg/ellipsis-icon.svg',
    title: 'Can I Question God and Still Have Faith?',
    desc: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....',
    views_count: 0,
    comments_count: 0,
  },
  {
    img_path: img5,
    time_post: 'May 28, 2023',
    time_read: '1 min read',
    icon_ellipsis_path: '/src/components/svg/ellipsis-icon.svg',
    title: 'Do I Need a Spiritual Mentor?',
    desc: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....',
    views_count: 0,
    comments_count: 0,
  },
  {
    img_path: img6,
    time_post: 'May 28, 2023',
    time_read: '1 min read',
    icon_ellipsis_path: '/src/components/svg/ellipsis-icon.svg',
    title: '15 Motivational Quotes When You’re Down',
    desc: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....',
    views_count: 0,
    comments_count: 0,
  },
]);
</script>

<style lang="scss" scoped>
@use '/src/assets/global.scss' as *;
@use '/src/pages/Home/mixins.scss' as *;

.main__container {
  position: relative;
  width: 100%;
  height: auto;
}

.main__text-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  top: 0;
  right: 0;
  background-color: transparent;
}

.text-container__header {
  font-size: 11rem;
  margin-top: 8.8rem;
  @include transparentText();
}

.text-container__main {
  font-size: 3.5rem;
  @include transparentText();
  font-family: 'cormorantgaramond semibold', serif;
  margin-bottom: 3.1rem;
}

.text-container__footer--img {
  color: $white-color;
  transform: rotate(180deg);
  width: 2.7rem;
  height: 5.7rem;
  position: relative;
}

.parallax-img {
  background: url(/src/components/imgs/background-blog-home.png) top center no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  background-attachment: fixed;
  position: relative;
  margin: 0;
  padding: 0;

  animation: fadeIn 0.5s ease-out forwards;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    background: url(/src/components/imgs/background-blog-transparent.png) top center no-repeat;
    background-size: cover;
  }
}

.text-container__header,
.text-container__main,
.text-container__footer--img,
.parallax-img {
  opacity: 0;
  animation: fadeIn 0.4s ease-out forwards;
  animation-delay: 0.4s;
}

// all stories
.all-stories__text--header {
  font-size: 5rem;
  margin-top: 8.1rem;
  margin-bottom: 6rem;
}

.all-stories__separate {
  margin: 0px 8rem 1.7rem 8rem;
  border-top: 1px solid $black-color;
  height: 0.5rem;
  @include widthSession();
}

.all-stories__content {
  @include widthSession();
}

.all-stories__content-item {
  margin-top: 9.9rem;
}

.all-stories__content-item:nth-of-type(5) {
  margin-top: calc(9.9rem + 4rem);
}

.all-stories__content-item--img {
  &.img-fluid {
    @include widthImg();
  }
}

.all-stories__content-item--info-wrapper {
  height: inherit;
  margin: 2.8rem 0 2.5rem 0;
}

.all-stories__content-item--info-wrapper__posting-time-wrapper {
  margin-bottom: 1.2rem;
  height: 3.4rem;
  font-size: 1.2rem;
}

.all-stories__content-item--info-wrapper__posting-time-wrapper__text-header {
  font-size: 1.2rem;
  font-family: 'avenir lt', sans-serif;
}

.all-stories__content-item--info-wrapper__posting-time-wrapper__desc-bgc {
  background-color: $black-color;
  width: 0.2rem;
  height: 0.2rem;
  margin: 0 0.8rem;
}

.all-stories__content-item--info-wrapper__posting-time-wrapper__reading-time {
  font-size: 1.2rem;
  font-family: 'avenir lt', sans-serif;
}

.all-stories__content-item--info-wrapper__posting-time-wrapper__icon-ellipsis {
  width: 1.9rem;
  height: 1.9rem;
  cursor: pointer;
}

// title card
.all-stories__content-item--info-wrapper__desc-wrapper {
  &:hover {
    cursor: pointer;
    color: rgb(79, 71, 104);
  }
}

.all-stories__content-item--info-wrapper__desc-wrapper__title {
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

.all-stories__content-item--info-wrapper__desc-wrapper__title--text {
  color: $black-color;
  @include ellipsisText();
}

.all-stories__content-item--info-wrapper__desc-wrapper__content {
  text-align: start;
  margin-bottom: 1.1rem;
  font-size: 1.5rem;
  line-height: 1.5;
  overflow: hidden;
  word-break: break-word;
  font-family: 'avenir lt', sans-serif;
  padding: 0.3rem;
  @include ellipsisText();
}

.all-stories__content-item--info-wrapper__desc-wrapper__separate {
  border-top: 1px solid #ccc;
  height: 0.5rem;
}

.all-stories__content-item--info-wrapper__desc-wrapper__comment-area {
  height: 3.4rem;
}

.all-stories__content-item--info-wrapper__desc-wrapper__comment-area__text {
  font-size: 1.2rem;
  font-family: 'avenir lt', sans-serif;

  &:not(:first-of-type) {
    margin-left: 1.6rem;
  }
}

//about
.about-container {
  padding-bottom: 10rem;
}
.about-container__separate {
  display: inline-block;
  @include widthSession();
  border-top: 1px solid $black-color;
  height: 0.5rem;
  margin: 6rem 8rem 5.6rem 8rem;
}

.about-container__div-row {
  width: 65%;
}

.about-container__div-row-children {
  margin-top: 6.5rem;
}

.about-container__title {
  font-size: 5rem;
}

.about-container__aside {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.about-container__aside--title {
  color: $black-color;
  font-size: 3.8rem;
  margin-bottom: 3rem;
}

.about-container__aside--desc {
  font-size: 1.5rem;
  font-family: 'avenir lt', sans-serif;
  margin-bottom: 4.7rem;
  max-width: 37.5rem;
}

.about-container__aside--btn-read-more {
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
}

.about-container__article--img {
  border-radius: 200px 200px 0 0;
  margin: auto;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.about-container__article--img-sm {
  display: none;
}

@media (max-width: 992px) {
  .all-stories__content-item:nth-of-type(odd):not(:nth-of-type(1)) {
    margin-top: 4rem;
  }
  .about-container__div-row {
    width: 80%;
  }
}

@media (max-width: 768px) {
  .parallax-img {
    background: url(/src/components/imgs/background-blog-home.png) top center no-repeat;
    background-size: cover;
    height: 50rem;
    width: 100%;
    position: relative;

    &::after {
      position: absolute;
      content: '';
      top: 0;
      right: 0;
      height: 50rem;
      width: 100%;
      background: url(/src/components/imgs/background-blog-transparent-md.png) top center no-repeat;
      background-size: cover;
    }
  }

  .text-container__header {
    font-size: 8.7rem;
  }

  .text-container__main {
    font-size: 2.5rem;
  }

  .about-container__separate,
  .all-stories__separate {
    width: 100%;
    margin: 0 0 2.2rem 0;
  }

  .about-container__separate {
    margin-top: 2.2rem;
  }

  .about-container__aside--title {
    font-size: 2.5rem;
  }

  .row.custom-gutter {
    --bs-gutter-x: 3rem;
  }
}

@media (max-width: 576px) {
  .text-container__header {
    font-size: 4rem;
  }

  .text-container__main {
    font-size: 1.8rem;
    text-wrap: wrap;
    text-align: center;
    width: 23.3rem;
  }

  .text-container__footer--img {
    width: 2.1em;
    height: 4.6em;
  }

  .all-stories__content {
    width: 100%;
  }

  .all-stories__content-item {
    margin-top: 0;
  }

  .all-stories__content-item--info-wrapper__desc-wrapper__title--text {
    font-size: 2rem;
  }

  .all-stories__content-item--info-wrapper__desc-wrapper__content {
    font-size: 1.4rem;
  }

  .about-container__aside--title {
    text-align: center;
    margin-top: 3rem;
  }

  .about-container__article--img-sm {
    display: block;
  }

  .about-container__article--img-lg {
    display: none;
  }

  .about-container__aside--desc {
    margin-top: 2.4rem;
  }

  .all-stories__text--header {
    margin-top: 2.7rem;
    margin-bottom: 1.4rem;
    font-size: 2.7rem;
  }

  .about-container__title {
    font-size: 2.7rem;
  }

  .center-button-sm {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about-container__aside--btn-read-more {
    width: 18rem;
    height: 4.2rem;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
