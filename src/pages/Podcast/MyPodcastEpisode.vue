<script setup>
import { useListCardStore } from '@/stores/podcast';
import IconApplePodcast from '@/components/icons/IconApplePodcast.vue';
import IconGooglePodcast from '@/components/icons/IconGooglePodcast.vue';
import IconRSSFeed from '@/components/icons/IconRSSFeed.vue';
import IconSpotify from '@/components/icons/IconSpotify.vue';
import IconStitcher from '@/components/icons/IconStitcher.vue';
import { reactive, markRaw, ref } from 'vue';
import IconPrev15sPodcast from '@/components/icons/IconPrev15sPodcast.vue';
import IconNext15sPodcast from '@/components/icons/IconNext15sPodcast.vue';
import IconPlay2VideoPodcast from '@/components/icons/IconPlay2VideoPodcast.vue';
import IconDownloadPodcast from '@/components/icons/IconDownloadPodcast.vue';
import IconPrevPodcast from '@/components/icons/IconPrevPodcast.vue';
import { RouterLink } from 'vue-router';

const listIcon = reactive([
  { icon: markRaw(IconRSSFeed), width: '2rem', height: '2rem' },
  { icon: markRaw(IconApplePodcast), width: '2rem', height: '2rem' },
  { icon: markRaw(IconSpotify), width: '2rem', height: '2rem' },
  { icon: markRaw(IconGooglePodcast), width: '2rem', height: '2rem' },
  { icon: markRaw(IconStitcher), width: '2rem', height: '2rem' },
]);

const listControl = reactive([
  { icon: markRaw(IconPrev15sPodcast), width: '2.2rem', height: '2.5rem' },
  { icon: markRaw(IconPlay2VideoPodcast), width: '4rem', height: '4rem' },
  { icon: markRaw(IconNext15sPodcast), width: '2.2rem', height: '2.5rem' },
  { icon: markRaw(IconDownloadPodcast), width: '1.7rem', height: '2.2rem' },
]);

const audioRef = ref(null);
const inputRangeRef = ref(null);
const progress = ref(0);

const stateRange = reactive({
  speed: 1,
  current_time: 0,
  duration: 0,
  volume: 0.5,
});

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const loadMetaData = () => {
  stateRange.duration = audioRef.value.duration;
};

const seekAudio = (event) => {
  const newValue = event.target.value;
  if (audioRef.value) {
    audioRef.value.currentTime = (newValue / 100) * audioRef.value.duration;
    progress.value = newValue;
    stateRange.current_time = audioRef.value.currentTime;
    if (inputRangeRef.value) {
      inputRangeRef.value.style.background = `linear-gradient(90deg, black ${progress.value}%, #999 0)`;
    }
  }
};

const updateTime = () => {
  if (audioRef.value && audioRef.value.duration) {
    stateRange.current_time = audioRef.value.currentTime;
    progress.value = (audioRef.value.currentTime / audioRef.value.duration) * 100;

    if (inputRangeRef.value) {
      inputRangeRef.value.style.background = `linear-gradient(90deg, black ${progress.value}%, #999 0)`;
    }
  }
};

const { indexList, handleShowItemByIndex } = useListCardStore();

const { title, content, img, post_time, time_read, path_sound } = handleShowItemByIndex(indexList);
console.log(title, content, img, post_time, time_read, path_sound);

const handleIncreaseSpeedRange = () => {
  if (stateRange.speed >= 2) {
    return (stateRange.speed = 0.5);
  }
  stateRange.speed += 0.5;
};
</script>

<template>
  <div class="podcast-container">
    <h2 class="text-center title">My Podcast</h2>
    <span class="separate"></span>

    <div class="header-container m-auto">
      <RouterLink to="/podcast" class="back-container">
        <span class="back-icon">
          <IconPrevPodcast />
        </span>
        <span class="back-text"> All Episodes </span>
      </RouterLink>
      <div class="row custom-gutterx-5">
        <div class="col-md-6">
          <img :src="img" alt="img" class="img-fluid shadow" />
        </div>
        <div class="col-md-6">
          <div class="aside-container">
            <h2 class="h2 aside-title md-hide">Lessons of Faith</h2>
            <h2 class="sub-title h2">{{ title }}</h2>
            <div class="mt-5 icon-container">
              <span v-for="(item, index) in listIcon" :key="index" class="icon-item">
                <component :is="item.icon" :width="item.width" :height="item.height" />
              </span>
            </div>
            <h2 class="h2 aside-title md-show">Lessons of Faith</h2>
          </div>
        </div>
        <div class="control-container">
          <div class="container-input-range">
            <span class="current-time">{{ formatTime(stateRange.current_time) }}</span>
            <input type="range" class="input-progress" ref="inputRangeRef" @input="seekAudio" v-model="progress" />
            <audio ref="audioRef" @loadedmetadata="loadMetaData" @timeupdate="updateTime">
              <source type="audio/mp3" :src="path_sound" />
            </audio>
            <span class="duration">{{ formatTime(stateRange.duration) }}</span>
          </div>
          <div class="control-item d-flex justify-content-center align-items-center">
            <span class="increase-input" @click="handleIncreaseSpeedRange">{{ stateRange.speed }}x</span>
            <div v-for="(item, index) in listControl" :key="index" style="cursor: pointer">
              <component :is="item.icon" :width="item.width" :height="item.height" class="icon" />
            </div>
          </div>
        </div>
        <div class="time-post">
          <span>Isabella Reeves</span> |
          <span>{{ time_read }}</span>
        </div>
        <span class="desc">
          {{ content }}
        </span>
      </div>
      <div class="d-flex justify-content-between align-items-center button-next-back-container">
        <div>
          <span class="icon-back">←</span>
          <span class="text-back">Previous Episode</span>
        </div>
        <div>
          <span class="text-next">Next Episode</span>
          <span class="icon-next">→</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '/src/assets/global.scss' as *;

.podcast-container {
  opacity: 0;
  animation-delay: 0.5s;
  animation: fadeIn 0.5s ease-out forwards;
  margin-bottom: 10rem;
}

.title,
.sub-title {
  font-size: 5rem;
}

.separate {
  @include widthSession();
  display: inline-block;
  border-top: 1px solid $black-color;
  height: 0.5rem;
  margin: 6rem 8rem 8rem 8rem;
}

.back-container {
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 3rem;
}

.back-icon,
.back-text {
  font-size: 1.5rem;
}

.back-icon {
  margin-right: 2rem;
}

.back-text {
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}

.header-container {
  @include widthSession();
  width: 65%;
}

.aside-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 5rem 0;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.icon-item {
  cursor: pointer;
  & ~ .icon-item {
    margin-left: 1.4rem;
  }
}

.md-show {
  display: none;
}

.control-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 100px;
  margin: 5rem auto;
}

.current-time,
.duration {
  margin: 0 1rem;
  font-size: 1.2rem;
  font-family: 'avenir lt';
}

.container-input-range {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
}

.input-progress {
  width: 100%;
  appearance: none;
  -webkit-appearance: none;
  background: linear-gradient(90deg, $black-color 0%, #999 0);
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    appearance: none;
    -webkit-appearance: none;
    height: 0.4rem;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: $black-color;
    height: 1.4rem;
    width: 1.4rem;
    margin-top: -0.5rem;
    border-radius: 50%;
    transition: transform 0.1s ease-in;
  }

  &:hover::-webkit-slider-thumb {
    transform: scale(1.2);
  }
}

.control-item {
  margin-top: 2rem;
}

.increase-input {
  cursor: pointer;
  font-size: 2rem;
  margin: 0 2.6rem;
  font-family: 'avenir lt';
  user-select: none;
}

.icon {
  margin: 0 2.6rem;
}

.time-post {
  width: 70%;
  margin: 0 auto;
  font-size: 2rem;
  opacity: 0.6;
  margin-bottom: 3rem;
}

.desc {
  width: 70%;
  margin: 0 auto;
  font-size: 2rem;
}

.button-next-back-container {
  margin-top: 4rem;
}

.icon-back,
.icon-next,
.text-back,
.text-next {
  font-size: 1.4rem;

  &:hover {
    color: $primary-1;
    cursor: pointer;
  }
}

.icon-back {
  margin-right: 1rem;
}

.icon-next {
  margin-left: 1rem;
}

@media (max-width: 992px) {
  .header-container {
    width: 80%;
  }
}

@media (max-width: 768px) {
  .separate {
    width: 100%;
    margin: 2.2rem 0;
  }

  .title,
  .sub-title,
  .sub-title__desc {
    text-align: center;
  }

  .aside-title {
    &.md-hide {
      display: none;
    }

    &.md-show {
      margin-top: 3rem;
      text-align: center;
      display: block;
    }
  }

  .sub-title {
    font-size: 2.2rem;
  }

  .icon-container {
    align-items: center;
    justify-content: center;
  }

  .search-container {
    width: 100%;
  }

  .control-container {
    display: inline-block;
    width: 100%;
    margin-top: 1rem;
  }

  .time-post,
  .desc {
    text-align: center;
    font-size: 1.6rem;
  }
}

@media (max-width: 576px) {
  .header-container {
    margin-bottom: 4rem !important;
  }

  .title,
  .sub-title {
    font-size: 2.7rem;
  }

  .not-found-container {
    padding: 10rem 0;
  }

  .icon,
  .increase-input {
    margin: 0 0.8rem;
  }

  .time-post {
    margin: 0 auto;
    margin-bottom: 2rem;
    width: 100%;
  }

  .desc {
    margin: 0 auto;
    width: 100%;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
