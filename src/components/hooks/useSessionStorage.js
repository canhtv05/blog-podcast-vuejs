import { ref, watch } from 'vue';

function useSessionStorage(key, initialValue) {
  const storeValue = sessionStorage.getItem(key);

  const value = ref(storeValue ? JSON.parse(storeValue) : initialValue);

  watch(value, (newValue) => {
    if (newValue === null || newValue === undefined) {
      sessionStorage.removeItem(key);
    } else {
      sessionStorage.setItem(key, JSON.stringify(newValue));
    }
  });

  return value;
}

export default useSessionStorage;
