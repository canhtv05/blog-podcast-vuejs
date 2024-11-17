import { ref, watch } from 'vue';

function useDebounce(value, delay = 1000) {
  const newValue = ref(value.value);
  let timer = null;

  watch(value, (newVal) => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      newValue.value = newVal;
    }, delay);
  });

  return newValue;
}

export default useDebounce;
