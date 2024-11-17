<template>
  <footer :class="$style.footerContainer" id="my-subscriber">
    <span :class="$style.footerContainerSeparate"></span>
    <h2 class="h2 text-center" :class="$style.footerContainerTitle">Have Faith. Subscribe</h2>
    <div class="m-auto" :class="$style.footerContainerDivRow">
      <div :class="$style.footerContainerDivRowChildren">
        <div :class="$style.emailContainer">
          <form action="/">
            <label for="email" class="form-label" :class="$style.emailContainerTitle"
              >Email
              <span>*</span>
            </label>
            <input
              type="text"
              id="email"
              class="form-control"
              :class="$style.emailInput"
              placeholder="Enter your email..."
            />
            <div class="" :class="$style.checkboxContainer">
              <div class="d-flex align-items-center">
                <input type="checkbox" :class="$style.checkboxCustom" id="policy" />
                <label for="policy" class="ms-3" :class="$style.labelCheckbox"
                  >Yes, subscribe me to your newsletter.</label
                >
              </div>
              <div :class="$style.btnSubscribeContainer">
                <button :class="$style.btnSubscribe">
                  <span :class="$style.btnSubscribeTitle">Subscribe</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<style module lang="scss">
@use '/src/assets/global.scss' as *;
@use '/src/pages/Home/mixins.scss' as *;

.footerContainerSeparate {
  @include widthSession();
  display: inline-block;
  border-top: 1px solid $black-color;
  height: 0.5rem;
  margin: 6rem 8rem 15rem 8rem;
}

.footerContainerDivRow {
  width: 65%;
}

.footerContainerDivRowChildren {
  margin-top: 6.5rem;
  margin-bottom: 15rem;
}

.footerContainerTitle {
  font-size: 5rem;
}

.emailContainerTitle {
  font-size: 1.5rem;
  font-family: 'avenir lt';
}

.emailInput {
  height: 4rem;
  border: 1px solid $black-color;
  background-color: transparent;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-family: 'avenir lt';

  &:hover {
    background-color: $white-color;
  }
}

.checkboxContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.checkboxCustom {
  appearance: none;
  -webkit-appearance: none;
  border: 1px solid $black-color;
  background-color: transparent;
  width: 1.6rem;
  height: 1.6rem;
  position: relative;
  cursor: pointer;

  &:checked {
    background-color: transparent;
  }

  &:checked::before {
    content: '';
    position: absolute;
    cursor: pointer;
    right: 50%;
    top: 50%;
    width: 4px;
    height: 10px;
    border: solid $black-color;
    background-color: transparent;
    border-width: 0 2px 2px 0;
    margin: -1px -1px 0 -1px;
    transform: rotate(45deg) translate(-50%, -50%);
    z-index: 2;
  }
}

.labelCheckbox {
  font-family: 'avenir lt';
  font-size: 1.5rem;
}

.btnSubscribe {
  @include btn();
}

.btnSubscribeTitle {
  margin: 0 5rem;
  font-family: 'avenir lt';
  font-size: 1.8rem;
}

@media (max-width: 992px) {
  .footerContainerDivRow {
    width: 80%;
  }
}

@media (max-width: 768px) {
  .footerContainerSeparate {
    width: 100%;
    margin: 0 0 2.2rem 0;
  }

  .footerContainerSeparate {
    margin-top: 2.2rem;
  }

  .footerContainerAsideTitle {
    font-size: 2.5rem;
  }

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
  .footerContainerAsideTitle {
    text-align: center;
    margin-top: 3rem;
  }

  .footerContainerTitle {
    font-size: 2.7rem;
  }

  .footerContainerDivRowChildren {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  .contactContainer {
    width: 80%;
  }
}
</style>
