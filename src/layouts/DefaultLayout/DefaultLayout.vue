<template>
  <div class="w-100 d-flex flex-column">
    <MyHeader />
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

import MyFooter from '../components/MyFooter/MyFooter.vue';
import MyHeader from '../components/MyHeader/MyHeader.vue';
</script>
