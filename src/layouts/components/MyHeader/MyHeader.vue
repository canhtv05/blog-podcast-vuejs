<template>
  <header class="container-fluid header-container">
    <!-- navbar -->
    <nav class="navbar navbar-expand-md header__navbar navbar-light">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <RouterLink to="/" class="navbar-brand ms-3 navbar-brand__a"> L - O - F </RouterLink>
        </div>

        <!-- button toggle visibility -->
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- div collapse navbar content -->
        <div class="collapse navbar-collapse w-100 justify-content-md-end" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item" style="margin: 0 0.5rem">
              <RouterLink to="/" class="nav-link header__nav-link__a" :class="{ active: nameCurrentURI === 'home' }"
                >Blog</RouterLink
              >
            </li>
            <li class="nav-item" style="margin: 0 0.5rem">
              <RouterLink
                to="/podcast"
                class="nav-link header__nav-link__a"
                :class="{ active: nameCurrentURI === 'podcast' }"
                >Podcast</RouterLink
              >
            </li>
            <li class="nav-item" style="margin: 0 0.5rem">
              <RouterLink
                to="/about"
                class="nav-link header__nav-link__a"
                :class="{ active: nameCurrentURI === 'about' }"
                >About</RouterLink
              >
            </li>
            <li class="nav-item" style="margin: 0 0.5rem">
              <a href="/#my-subscriber" class="nav-link header__nav-link__a">Contact</a>
            </li>
            <li class="nav-item" style="margin: 0 0 0.5rem">
              <div
                class="header__nav-link__a"
                v-if="isLogged.login.value.is_login"
                style="cursor: pointer; user-select: none"
                @click="handleShowModalLogout"
              >
                Log out
              </div>
              <div
                class="header__nav-link__a"
                v-else
                style="cursor: pointer; user-select: none"
                @click="handleShowModalLogin"
              >
                Log in
              </div>
            </li>
          </ul>
        </div>
      </div>
      <form action="/" class="container-md form-search">
        <button class="form-search__button_search">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="form-search__icon-search" />
        </button>
        <input type="text" class="form-control input-group__input rounded-pill" placeholder="Search..." />
      </form>
    </nav>
  </header>
</template>

<script setup>
import { useLoginStore } from '@/stores/login';
import { computed, ref, watchEffect } from 'vue';
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';

const currentURI = useRoute();
let nameCurrentURI = ref('home');

watchEffect(() => {
  switch (currentURI.name) {
    case 'home': {
      nameCurrentURI.value = 'home';
      break;
    }
    case 'podcast': {
      nameCurrentURI.value = 'podcast';
      break;
    }
    case 'about': {
      nameCurrentURI.value = 'about';
      break;
    }
    default: {
      nameCurrentURI.value = 'default';
      break;
    }
  }
});

const isLogged = computed(() => useLoginStore());

defineOptions({
  name: 'MyHeader',
});

const handleShowModalLogin = () => {
  isLogged.value.handleShowLoginModal();
};

const handleShowModalLogout = () => {
  isLogged.value.handleShowLogoutModal();
};
</script>

<style scoped lang="scss">
@use '@/assets/global.scss' as *;

$height-input: 4.2rem;
$width-input: 4.2rem;

.header__navbar {
  margin: 3.3rem 0px;
}

.navbar-brand__a {
  position: relative;
  font-size: 2.2rem;

  &::after {
    position: absolute;
    content: '';
    top: -0.8rem;
    right: -1.6rem;
    width: 1.5rem;
    height: 1.6rem;
    background: url(/src/components/svg/multiplication.svg) center center no-repeat;
    background-size: cover;
    z-index: 1;
  }
}

.header__nav-link__a {
  font-size: 1.6rem;
  text-align: right;
  line-height: 45px;
  padding: 0 1rem;
  position: relative;

  &.active {
    color: $primary-1 !important;
  }

  &::after {
    position: absolute;
    content: '';
    bottom: 0.6rem;
    right: 0;
    width: 100%;
    height: 2px;
    background-color: $black-color;
    transform-origin: right;
    transition: transform 0.5s;
    transform: scaleX(0);
  }

  &:hover::after {
    transform-origin: left;
    transform: scaleX(1);
  }
}

.form-search {
  position: relative;
  height: $height-input;
  width: 20%;

  @media (max-width: 992px) {
    width: 30%;
  }

  @media (max-width: 768px) {
    margin-top: 1.4rem;
    width: 100%;
  }
}

.input-group__input {
  font-size: 1.6rem;
  height: $height-input;
  border-color: $black-color;
  padding-left: 2.6rem;
  padding-right: 6rem;
  background-color: $bgc;

  &:focus {
    border-color: $black-color;
    box-shadow: 0 0 0 0.1rem $black-color;
    background-color: $bgc;
  }

  &:hover {
    border-color: $black-color;
    box-shadow: 0 0 0 0.1rem $black-color;
  }

  &::placeholder {
    color: $black-color;
  }
}

.form-search__button_search {
  position: absolute;
  top: 0;
  right: 0.8rem;
  height: inherit;
  width: $width-input;
  background-color: $black-color;
  border: 1px solid $black-color;
  border-top-right-radius: 50rem;
  border-bottom-right-radius: 50rem;
  font-size: 1.5rem;
  color: $white-color;

  &:hover ~ .input-group__input {
    border-color: $black-color;
    box-shadow: 0 0 0 0.1rem $black-color;
  }
}

.form-search__icon-search {
  color: currentColor;
  background-color: transparent;
}

@media (max-width: 768px) {
  .navbar-light .navbar-toggler {
    width: $height-input;
    height: $width-input;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2px;
  }

  .navbar-light .navbar-toggler {
    border-color: transparent;
  }

  .navbar-toggler-icon {
    width: 2.8rem;
    height: 2.8rem;
  }

  .header__nav-link__a {
    border-bottom: 1px solid #ccc;

    &::after {
      visibility: hidden;
    }
  }
}
</style>
