import { ref, watch } from 'vue';

function useLocalStorage(key, initialValue) {
  const storeValue = localStorage.getItem(key);

  const value = ref(storeValue ? JSON.parse(storeValue) : initialValue);

  watch(value, (newValue) => {
    if (newValue === null || newValue === undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  });

  const setValue = (newValue) => {
    value.value = newValue;
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return { setValue, value };
}

export default useLocalStorage;
