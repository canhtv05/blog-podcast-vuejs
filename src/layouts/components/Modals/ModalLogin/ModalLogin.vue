<template>
  <div class="overlay"></div>
  <div class="my-container">
    <div class="modal d-block show" tabindex="-1">
      <div class="modal-dialog my-modal">
        <div class="modal-content rounded">
          <div class="modal-header">
            <h5 class="modal-title login text-center">Login</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="storeLogin.handleHideLoginModal"
            ></button>
          </div>
          <div class="modal-body was-validated">
            <label for="username" class="my-label">Username: </label>
            <input
              type="text"
              class="form-control"
              id="username"
              required
              v-model="info.user_name"
              style="font-size: 1.4rem"
            />
            <span class="invalid-feedback my-label">Enter your username</span>
            <div class="p-3"></div>
            <label for="username" class="my-label">Password: </label>
            <input
              type="text"
              class="form-control p-2"
              id="password"
              required
              v-model="info.pass_word"
              style="font-size: 1.4rem"
            />
            <span class="invalid-feedback my-label">Enter your password</span>
          </div>
          <div class="modal-footer">
            <button type="button" data-bs-dismiss="modal" class="my-close" @click="storeLogin.handleHideLoginModal">
              Close
            </button>
            <button class="btnSubscribe" @click="handleLogin">
              <span class="btnSubscribeTitle">Login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLoginStore } from '@/stores/login';
import { reactive } from 'vue';

const storeLogin = useLoginStore();

const info = reactive({
  user_name: null,
  pass_word: null,
});

const handleLogin = () => {
  if (!info.user_name || !info.pass_word) return;
  storeLogin.setLogin(info.user_name, info.pass_word);
  storeLogin.handleHideLoginModal();
};
</script>

<style scoped lang="scss">
@use '/src/assets/global.scss' as *;

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9998;
}

.my-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 9999;
}

.my-modal {
  position: relative;
  top: 50%;
  transform: translateY(-50%) !important;
  height: auto;
}

.login {
  font-family: 'avenir lt', sans-serif;
  font-size: 3rem;
}

.my-label {
  font-family: 'avenir lt', sans-serif;
  font-size: 1.6em;
}

.my-close {
  font-family: 'avenir lt', sans-serif;
  margin-right: 1rem;
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 1.4rem;
}
.btnSubscribe {
  @include btn();
  padding: 0.2rem 0;
}

.btnSubscribeTitle {
  margin: 0 2rem;
  font-family: 'avenir lt';
  font-size: 1.5rem;
}
</style>
