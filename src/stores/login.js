import { defineStore } from 'pinia';
import useLocalStorage from '@/components/hooks/useLocalStorage';
import { ref } from 'vue';

export const useLoginStore = defineStore('login', () => {
  const isShowLoginModal = ref(false);
  const isShowLogoutModal = ref(false);
  const login = useLocalStorage('login', {
    username: null,
    password: null,
    is_login: false,
  });

  const setLogin = (username, password) => {
    login.setValue({
      username: username,
      password: password,
      is_login: true,
    });
  };

  const setLogout = () => {
    login.setValue({
      username: null,
      password: null,
      is_login: false,
    });
  };

  const handleShowLoginModal = () => {
    isShowLoginModal.value = true;
  };

  const handleHideLoginModal = () => {
    isShowLoginModal.value = false;
  };

  const handleShowLogoutModal = () => {
    isShowLogoutModal.value = true;
  };

  const handleHideLogoutModal = () => {
    isShowLogoutModal.value = false;
  };

  return {
    login,
    setLogin,
    isShowLoginModal,
    handleShowLoginModal,
    handleHideLoginModal,
    setLogout,
    isShowLogoutModal,
    handleShowLogoutModal,
    handleHideLogoutModal,
  };
});
