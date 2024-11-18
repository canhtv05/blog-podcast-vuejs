<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 22" :width="width" :height="height">
    <path
      fill="currentColor"
      d="M8 14.4V.5a.5.5 0 0 1 1 0v13.6l5.4-5a.5.5 0 1 1 .6.8l-6.8 6.2-6.1-6.4a.5.5 0 0 1 .7-.7L8 14.4zm9 7.1c0 .3-.2.5-.5.5H.5a.5.5 0 1 1 0-1h16c.3 0 .5.2.5.5z"
    ></path>
  </svg>
</template>

<script setup>
defineOptions({
  name: 'IconDownloadPodcast',
});
defineProps({
  width: {
    type: String,
    default: '1.7rem',
  },
  height: {
    type: String,
    default: '2.2rem',
  },
});
</script>
