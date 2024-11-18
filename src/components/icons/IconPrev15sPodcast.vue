<template>
  <svg viewBox="0 0 22 25" :width="width" :height="height">
    <g
      transform="translate(22), scale(-1, 1)"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-width="1"
    >
      <path d="M20.26 10.23a10 10 0 1 1-6.53-5.85" stroke-linejoin="round"></path>
      <path d="M10 1l4 3.5L10 8"></path>
    </g>
    <text
      fill="currentColor"
      font-family="inherit"
      font-size="10"
      font-weight="normal"
      letter-spacing="-.8"
      text-anchor="middle"
      x="10.5"
      y="18"
    >
      15
    </text>
  </svg>
</template>

<script setup>
defineOptions({
  name: 'IconPrev15sPodcast',
});
defineProps({
  width: {
    type: String,
    default: '2.2rem',
  },
  height: {
    type: String,
    default: '2.5rem',
  },
});
</script>
