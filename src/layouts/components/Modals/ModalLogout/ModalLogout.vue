<template>
  <div class="overlay"></div>
  <div class="my-container">
    <div class="modal d-block show" tabindex="-1">
      <div class="modal-dialog my-modal">
        <div class="modal-content rounded">
          <div class="modal-header">
            <h5 class="modal-title login text-center">Logout</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="storeLogin.handleHideLogoutModal"
            ></button>
          </div>
          <div class="modal-body">
            <span class="my-label">Do you want to logout?</span>
          </div>
          <div class="modal-footer">
            <button type="button" data-bs-dismiss="modal" class="my-close" @click="storeLogin.handleHideLogoutModal">
              Close
            </button>
            <button class="btnSubscribe" @click="handleLogout">
              <span class="btnSubscribeTitle">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLoginStore } from '@/stores/login';

const storeLogin = useLoginStore();

const handleLogout = () => {
  storeLogin.setLogout();
  storeLogin.handleHideLogoutModal();
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
