<template>
  <div class="about-container">
    <h2 class="text-center title">About</h2>
    <span class="separate"></span>
    <div class="header-container m-auto">
      <div class="row custom-gutter">
        <div class="col-md-6 show-md">
          <div class="aside-container">
            <h2 class="sub-title h2">Isabella Reeves</h2>
            <span class="sub-title-separate"></span>
            <div class="row d-flex justify-content-between">
              <div class="col-md-6">
                <span class="span-subtitle">My personal story</span>
              </div>
              <div class="col-md-6">
                <span class="span-subtitle">Life, Faith, Confidence</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="img-container">
            <img src="/src/components/imgs/about-img1.png" alt="img1" class="img-fluid shadow img-main" />
            <img src="/src/components/imgs/about-img2.png" alt="img2" class="img-fluid shadow img-abs" />
          </div>
        </div>
        <div class="col-md-6 hide-md">
          <div class="aside-container">
            <h2 class="sub-title h2">Isabella Reeves</h2>
            <span class="sub-title-separate"></span>
            <div class="row d-flex justify-content-between mb-5">
              <div class="col-md-6">
                <span class="span-subtitle">My personal story</span>
              </div>
              <div class="col-md-6">
                <span class="span-subtitle">Life, Faith, Confidence</span>
              </div>
            </div>
            <span class="sub-title__content"
              >I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double
              click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you
              like on your page. I’m a great place for you to tell a story and let your users know a little more about
              you.
            </span>
            <span class="sub-title__content"
              >This is a great space to write a long text about your company and your services. You can use this space
              to go into a little more detail about your company. Talk about your team and what services you provide.
              Tell your visitors the story of how you came up with the idea for your business and what makes you
              different from your competitors. Make your company stand out</span
            >
            <div>
              <button class="btn-submit mt-5" @click="handleNavigateHome">
                <span class="btn-submit-title">My blog</span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6 show-md sub-title__content-show-md">
          <span class="sub-title__content"
            >I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double
            click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you
            like on your page. I’m a great place for you to tell a story and let your users know a little more about
            you.
          </span>
          <br />
          <br />
          <span class="sub-title__content"
            >This is a great space to write a long text about your company and your services. You can use this space to
            go into a little more detail about your company. Talk about your team and what services you provide. Tell
            your visitors the story of how you came up with the idea for your business and what makes you different from
            your competitors. Make your company stand out</span
          >
          <div class="btn-submit-show-md" @click="handleNavigateHome">
            <button class="btn-submit mt-5">
              <span class="btn-submit-title">My blog</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleNavigateHome = () => {
  router.push('/');
};
</script>

<style scoped lang="scss">
@use '/src/assets/global.scss' as *;

.about-container {
  opacity: 0;
  animation-delay: 0.5s;
  animation: fadeIn 0.5s ease-out forwards;
  margin-bottom: 18rem;
}

.title,
.sub-title {
  font-size: 5rem;
  margin-top: 8rem;
}

.sub-title {
  margin-top: 0;
}

.sub-title-separate {
  width: 100%;
  height: 0.5px;
  background-color: $black-color;
  margin-top: 1rem;
}

.sub-title__content {
  font-size: 1.5rem;
  font-family: 'avenir lt';
  margin-top: 2rem;
}

.btn-submit {
  @include btn();
  background-color: transparent;
  color: $black-color;
  width: 19.8rem;
  padding: 0.4rem 1.6rem;

  &:hover {
    color: $white-color;
    background-color: $primary-1;
  }
}

.btn-submit-show-md {
  display: flex;
  justify-content: center;

  & > .btn-submit {
    padding: 1rem 1.6rem;
  }
}

.btn-submit-title {
  margin: 0 auto;
  font-family: 'avenir lt';
  font-size: 1.5rem;
}

.span-subtitle {
  display: block;
  margin-top: 1rem;
  font-size: 1.4rem;
  font-family: 'avenir lt';
}

.separate {
  @include widthSession();
  display: inline-block;
  border-top: 1px solid $black-color;
  height: 0.5rem;
  margin: 6rem 8rem 8rem 8rem;
}

.header-container {
  @include widthSession();
  width: 65%;
}

.img-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-main {
  border-radius: 200px 200px 0 0;
}

.img-abs {
  position: absolute;
  bottom: -34%;
  right: 50%;
}

.aside-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 5rem 0;
}

.col-md-6 {
  &.show-md {
    display: none;
  }
}

.sub-title__content-show-md {
  margin-top: 20rem;
}

@media (max-width: 1200px) {
  .about-container {
    margin-bottom: 16rem;
  }
}

@media (max-width: 992px) {
  .about-container {
    margin-bottom: 12rem;
  }

  .header-container {
    width: 80%;
  }

  .img-abs {
    width: 70%;
    bottom: -25%;
    right: 50%;
  }
}

@media (max-width: 768px) {
  .separate,
  .sub-title-separate {
    width: 100%;
    margin: 2.2rem 0;
  }

  .sub-title {
    font-size: 3.8rem;
    text-align: center;
  }

  .title,
  .span-subtitle {
    text-align: center;
  }

  .img-abs {
    right: 0;
    left: 50%;
    width: 60%;
    bottom: -30%;
  }

  .col-md-6 {
    &.show-md {
      display: block;
    }

    &.hide-md {
      display: none;
    }
  }
}

@media (max-width: 576px) {
  .title,
  .sub-title {
    font-size: 2.7rem;
  }

  .img-abs {
    width: 60%;
    bottom: -18%;
  }

  .sub-title__content-show-md {
    margin-top: 14rem;
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
