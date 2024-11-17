import { onBeforeUnmount, onMounted, reactive } from 'vue';

function useViewport() {
  const windowSize = reactive({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateSize = () => {
    windowSize.width = window.innerWidth;
    windowSize.height = window.innerHeight;
  };

  // clean up func
  onMounted(() => {
    window.addEventListener('resize', updateSize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateSize);
  });

  return { windowSize };
}

export default useViewport;
