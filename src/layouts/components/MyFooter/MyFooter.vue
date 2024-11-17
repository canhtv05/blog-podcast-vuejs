<template>
  <footer :class="$style.footerContainer">
    <!-- contact -->
    <form action="/" class="was-validated">
      <div :class="$style.divContact">
        <div :class="$style.contactContainer">
          <div class="row gx-5">
            <div class="col-md-6">
              <div class="d-flex flex-column">
                <h2 class="h2" :class="$style.title">
                  Send Me a Prayer & <br />
                  <span> I'll Send One Back</span>
                </h2>
                <div class="d-flex" :class="$style.iconContactContainer">
                  <font-awesome-icon
                    :icon="['fab', 'twitter']"
                    style="font-size: 2.4rem; cursor: pointer; width: 2.4rem; height: 2.4rem"
                    :class="$style.icon"
                  />
                  <font-awesome-icon
                    :icon="['fab', 'facebook-f']"
                    style="font-size: 2.4rem; cursor: pointer; width: 2.4rem; height: 2.4rem"
                    :class="$style.icon"
                  />
                  <font-awesome-icon
                    :icon="['fab', 'instagram']"
                    style="font-size: 2.4rem; cursor: pointer; width: 2.4rem; height: 2.4rem"
                    :class="$style.icon"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-6 mb-4">
                  <label for="first-name" :class="$style.labelContactFooter"
                    >First Name
                    <span>*</span>
                  </label>
                  <input type="text" id="first-name" class="form-control" :class="$style.inputContactFooter" required />
                  <div class="invalid-feedback" :class="$style.invalidFeedbackContainer">Enter a first name.</div>
                </div>
                <div class="col-md-6 mb-4">
                  <label for="last-name" :class="$style.labelContactFooter"
                    >Last Name
                    <span>*</span>
                  </label>
                  <input type="text" id="last-name" class="form-control" :class="$style.inputContactFooter" required />
                  <div class="invalid-feedback" :class="$style.invalidFeedbackContainer">Enter a last name.</div>
                </div>
              </div>
              <div class="col-md-6 w-100 mb-4">
                <label for="email-footer" :class="$style.labelContactFooter"
                  >Email
                  <span>*</span>
                </label>
                <input
                  type="email"
                  id="email-footer"
                  class="form-control"
                  :class="$style.inputContactFooter"
                  required
                />
                <div class="invalid-feedback" :class="$style.invalidFeedbackContainer">
                  Enter an email address like example@mysite.com.
                </div>
              </div>
              <div class="col-md-6 w-100 mb-4">
                <label for="area-footer" :class="$style.labelContactFooter">Leave us a message... </label>
                <textarea
                  id="area-footer"
                  class="form-control"
                  style="resize: none"
                  rows="4"
                  :class="$style.textareaContactFooter"
                ></textarea>
              </div>
              <div :class="$style.btnSubmitContainer">
                <button :class="$style.btnSubmit">
                  <span :class="$style.btnSubmitTitle">Submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="d-flex p-4 justify-content-center" :class="$style.divCopyright">
      <span :class="$style.copyright">© 11-2024 Copyright by Canhtv05</span>
    </div>
  </footer>
</template>

<script setup>
defineOptions({
  name: 'MyFooter',
});
</script>

<style module lang="scss">
@use '/src/assets/global.scss' as *;
@use '/src/pages/Home/mixins.scss' as *;

@mixin inputStyle($border-color) {
  background-color: transparent;
  border-radius: 0px;
  border: none;
  border-bottom: 1px solid $border-color;
  font-size: 1.4rem;
  box-shadow: none;

  &:focus {
    background-color: transparent;
    box-shadow: none !important;
    border: none;
    border-bottom: 1px solid $border-color;
  }
}

.divContact {
  width: 100%;
  background-color: $primary-2;
}

.contactContainer {
  @include widthSession();
  margin: 0 auto;
  padding: 8rem 0;
}

.title {
  font-size: 3.8rem;
  margin-bottom: 10rem;
}

.iconContactContainer {
  margin-bottom: 4rem;
}

.icon {
  & ~ .icon {
    margin-left: 1.6rem;
  }
}

.labelContactFooter {
  font-size: 1.5rem;
  color: #2a222b;
  font-family: 'avenir lt';
  margin-bottom: 0.8rem;
}

.invalidFeedbackContainer {
  font-size: 1.5rem;
  font-family: 'avenir lt';
}

.inputContactFooter {
  @include inputStyle(#000);
  height: 4rem;
}

.textareaContactFooter {
  @include inputStyle(#000);
}

.btnSubmit {
  @include btn();
  background-color: transparent;
  color: $black-color;
  width: 11.2rem;

  &:hover {
    color: $white-color;
    background-color: $primary-1;
  }
}

.btnSubmitTitle {
  margin: 0 auto;
  font-family: 'avenir lt';
  font-size: 1.5rem;
}

.divCopyright {
  background-color: $primary-1;
}

.copyright {
  font-family: 'avenir lt';
  font-size: 1.4rem;
  text-align: center;
  color: $white-color;
}

@media (max-width: 768px) {
  .btnSubmit,
  .btnSubscribe {
    width: 100%;
  }

  .title {
    width: 100%;
    font-size: 2.7rem;
    text-align: center;
    margin-bottom: 4rem;
  }

  .iconContactContainer {
    justify-content: center;
  }
}

@media (max-width: 665px) {
  .checkboxContainer {
    flex-direction: column;
    align-items: start;

    & > .btnSubscribeContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-top: 2rem;
    }
  }
}

@media (max-width: 576px) {
  .contactContainer {
    width: 80%;
  }
}
</style>
