<template>
  <svg :width="width" :height="height" viewBox="0 0 48 48">
    <g fill="none">
      <circle stroke="currentColor" stroke-width="1" cx="24" cy="24" r="23.5"></circle>
      <path
        d="M33.32,23.81 C33.80,24.09 33.80,24.55 33.32,24.84 L18.85,33.52 C18.38,33.81 18,33.59 18,33.05 L18,15.60 C18,15.05 18.38,14.84 18.85,15.12 L33.32,23.81 Z"
        fill="currentColor"
      ></path>
    </g>
  </svg>
</template>

<script setup>
defineOptions({
  name: 'IconPlay2VideoPodcast',
});
defineProps({
  width: {
    type: String,
    default: '4rem',
  },
  height: {
    type: String,
    default: '4rem',
  },
});
</script>
