<template>
  <div class="w-100 d-flex flex-column">
    <MyHeader />
    <ModalLogin v-if="storeLogin.isShowLoginModal" />
    <ModalLogout v-if="storeLogin.isShowLogoutModal" />
    <main class="main-content w-100">
      <router-view />
    </main>
    <MyFooter />
  </div>
</template>

<script setup>
defineOptions({
  name: 'DefaultLayout',
});

import { useLoginStore } from '@/stores/login';
import ModalLogin from '../components/Modals/ModalLogin/ModalLogin.vue';
import MyFooter from '../components/MyFooter/MyFooter.vue';
import MyHeader from '../components/MyHeader/MyHeader.vue';
import { computed } from 'vue';
import ModalLogout from '../components/Modals/ModalLogout/ModalLogout.vue';

const storeLogin = computed(() => useLoginStore());
</script>
