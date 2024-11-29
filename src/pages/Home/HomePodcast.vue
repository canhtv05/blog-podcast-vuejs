<template>
  <div class="podcast-container container-fluid">
    <span class="podcast-container__separate"></span>
    <h2 class="h2 text-center podcast-container__title">My Podcast</h2>
    <span class="podcast-container__separate"></span>
    <div class="m-auto podcast-container__div-row">
      <div class="podcast-container__div-row-children">
        <div class="row custom-gutter">
          <div class="col-sm-6 d-flex justify-content-center">
            <div class="podcast-container__article">
              <img
                src="/src/components/imgs/blog-img8.png"
                alt=""
                class="img-fluid podcast-container__article--img shadow"
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="podcast-container__aside">
              <p class="podcast-container__aside--title">Lessons of Life: Things I've Learned, Moments I Cherish.</p>
              <p class="podcast-container__aside--desc text-break">
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or
                double click me to add your own content and make changes to the font. I’m a great place for you to tell
                a story and let your users know a little more about you.
              </p>
              <div class="center-button-sm">
                <button
                  class="btn podcast-container__aside--btn-read-more text-center"
                  @click="handleNavigateToPodcast"
                >
                  Listen
                </button>
              </div>

              <div class="center-button-sm">
                <font-awesome-icon
                  :icon="['fas', 'music']"
                  style="font-size: 2rem; cursor: pointer; width: 2rem; height: 2rem"
                />
                <span class="me-5"></span>
                <font-awesome-icon
                  :icon="['fab', 'spotify']"
                  style="font-size: 2rem; cursor: pointer; width: 2rem; height: 2rem"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

defineOptions({
  name: 'HomePodcast',
});

const router = useRouter();

const handleNavigateToPodcast = () => {
  router.push('/podcast');
};
</script>

<style lang="scss" scoped>
@use '/src/assets/global.scss' as *;
@use '/src/pages/Home/mixins.scss' as *;

.podcast-container {
  padding-bottom: 10rem;
}
.podcast-container__separate {
  @include widthSession();
  display: inline-block;
  border-top: 1px solid $black-color;
  height: 0.5rem;
  margin: 6rem 8rem 5.6rem 8rem;
}

.podcast-container__div-row {
  width: 65%;
}

.podcast-container__div-row-children {
  margin-top: 6.5rem;
}

.podcast-container__title {
  font-size: 5rem;
}

.podcast-container__aside {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.podcast-container__aside--title {
  color: $black-color;
  font-size: 3.8rem;
  margin-bottom: 3rem;
}

.podcast-container__aside--desc {
  font-size: 1.5rem;
  font-family: 'avenir lt', sans-serif;
  margin-bottom: 4.7rem;
  max-width: 37.5rem;
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
}

.podcast-container__article--img {
  border-radius: 1rem;
  margin: auto;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.center-button-sm {
  ~ .center-button-sm {
    margin-top: 3rem;
  }
}

@media (max-width: 992px) {
  .podcast-container__div-row {
    width: 80%;
  }
}

@media (max-width: 768px) {
  .podcast-container__separate {
    width: 100%;
    margin: 0 0 2.2rem 0;
  }

  .podcast-container__separate {
    margin-top: 2.2rem;
  }

  .podcast-container__aside--title {
    font-size: 2.5rem;
  }

  .row.custom-gutter {
    --bs-gutter-x: 3rem;
  }
}

@media (max-width: 576px) {
  .podcast-container__aside--title {
    text-align: center;
    margin-top: 3rem;
  }

  .podcast-container__title {
    font-size: 2.7rem;
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
