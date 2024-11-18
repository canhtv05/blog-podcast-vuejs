<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 7 11" class="P0RRDg">
    <path
      fill="currentColor"
      fill-rule="nonzero"
      d="M6 10a.5.5 0 0 1-.706.037L.253 5.5 5.293.963a.5.5 0 1 1 .669.743L1.748 5.5l4.216 3.794A.5.5 0 0 1 6 10z"
    ></path>
  </svg>
</template>

<script setup>
defineOptions({
  name: 'IconPrevPodcast',
});
defineProps({
  width: {
    type: String,
    default: '0.7rem',
  },
  height: {
    type: String,
    default: '1.1rem',
  },
});
</script>
