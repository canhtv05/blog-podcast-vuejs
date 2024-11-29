<script setup>
import useDebounce from '@/components/hooks/useDebounce';
import IconApplePodcast from '@/components/icons/IconApplePodcast.vue';
import IconGooglePodcast from '@/components/icons/IconGooglePodcast.vue';
import IconRSSFeed from '@/components/icons/IconRSSFeed.vue';
import IconSpotify from '@/components/icons/IconSpotify.vue';
import IconStitcher from '@/components/icons/IconStitcher.vue';
import { useRouter } from 'vue-router';
import { reactive, markRaw, ref, watch, watchEffect } from 'vue';

defineOptions({
  name: 'MyPodcast',
});

const valueSearch = ref('');
const isShowPodcast = ref(true);
const router = useRouter();
const { setIndexList } = useListPodCastStore();

let debouncedSearch;

watchEffect(() => {
  debouncedSearch = useDebounce(valueSearch, 500);
});

watch(debouncedSearch, (newSearch) => {
  const template = 'podcast';
  let isMatches = false;

  if (newSearch) {
    const lowerCaseSearch = newSearch.toLowerCase().trim();
    for (let i = 0; i < template.length; i++) {
      const part = template.slice(0, i + 1);

      if (lowerCaseSearch === part) {
        isMatches = true;
      }
    }

    isShowPodcast.value = isMatches;
  }
});

watch(valueSearch, (newSearch) => {
  if (!newSearch) isShowPodcast.value = true;
});

// Dùng markRaw để đánh dấu component không reactive
const listIcon = reactive([
  { icon: markRaw(IconRSSFeed), width: '2rem', height: '2rem' },
  { icon: markRaw(IconApplePodcast), width: '2rem', height: '2rem' },
  { icon: markRaw(IconSpotify), width: '2rem', height: '2rem' },
  { icon: markRaw(IconGooglePodcast), width: '2rem', height: '2rem' },
  { icon: markRaw(IconStitcher), width: '2rem', height: '2rem' },
]);

import img1 from '@/components/imgs/blog-img10.png';
import img2 from '@/components/imgs/blog-img11.png';
import img3 from '@/components/imgs/blog-img12.png';
import img4 from '@/components/imgs/blog-img13.png';
import img5 from '@/components/imgs/blog-img14.png';
import img6 from '@/components/imgs/blog-img15.png';
import IconPlayVideoPodcast from '@/components/icons/IconPlayVideoPodcast.vue';
import { useListPodCastStore } from '@/stores/podcast';

const listCard = reactive([
  {
    img: img1,
    title: 'Finding Fulfillment in Community Life',
    post_time: '9/29/2023',
    time_read: '10 min',
    content: 'Do you have video episodes in your podcast? Any podcast episodes will get a video player.',
  },
  {
    img: img2,
    title: 'Hosting: Rev Martha Bailes',
    post_time: '9/15/2023',
    time_read: '12 min',
    content:
      'Any changes you make to your podcast, like adding or editing an episode, will automatically be updated on your player.',
  },
  {
    img: img3,
    title: 'Sunday Pod: Whole & Holy',
    post_time: '9/1/2023',
    time_read: '5 min',
    content: 'Every episode automatically gets its own page. Visitors can watch, listen and download each episode.',
  },
  {
    img: img4,
    title: 'Hosting Rev. John Watkins',
    post_time: '8/18/2023',
    time_read: '21 min',
    content: 'Customize the look and feel of the player to match your site. Your podcast will look and sound awesome!',
  },
  {
    img: img5,
    title: 'When You Feel Your Prayers Aren’t Working',
    post_time: '8/17/2020',
    time_read: '5 min',
    content:
      'Any changes you make to your podcast, like adding or editing an episode, will automatically be updated on your player.',
  },
  {
    img: img6,
    title: 'What Does “Faith Alone” Mean',
    post_time: '8/17/2020',
    time_read: '5 min',
    content: 'Every episode automatically gets its own page. Visitors can watch, listen and download each episode.',
  },
]);

const handleDeleteValueSearch = () => {
  valueSearch.value = '';
};

const handleNavigateToEpisode = (index) => {
  setIndexList(index);
  router.push('/podcast/episode');
};
</script>

<template>
  <div class="podcast-container">
    <h2 class="text-center title">My Podcast</h2>
    <span class="separate"></span>
    <div class="header-container m-auto">
      <div class="row gx-md-5 custom-gutter">
        <div class="col-md-6">
          <img src="/src/components/imgs/blog-img9.png" alt="img9" class="img-fluid shadow" />
        </div>
        <div class="col-md-6">
          <div class="aside-container">
            <h2 class="sub-title h2">Lessons of Faith</h2>
            <p class="sub-title__desc">Isabella Reeves</p>
            <div class="mt-5 icon-container">
              <span v-for="(item, index) in listIcon" :key="index" class="icon-item">
                <component :is="item.icon" :width="item.width" :height="item.height" />
              </span>
            </div>
          </div>
        </div>
        <span class="sub-title__content"
          >All the info, audio or video that's needed to show and play your podcast episodes is contained in the RSS
          feed. Head to Settings and connect your podcast's RSS feed.</span
        >
      </div>
      <div class="search-container input-group">
        <span class="input-group-text span-input-search">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </span>
        <input
          type="text"
          class="form-control form-control-plaintext input-search"
          placeholder="Search podcast..."
          v-model="valueSearch"
        />
        <span class="span-input-search-icon-delete input-group-text" @click="handleDeleteValueSearch">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </span>
      </div>

      <div v-if="isShowPodcast" class="row gy-3 mt-5 gx-5">
        <RouterLink
          to="/podcast/episode"
          v-for="(item, index) in listCard"
          :key="index"
          class="col-lg-4 col-md-6 col-sm-12 d-flex align-content-center justify-content-center flex-column h-100 card-container"
          @click="handleNavigateToEpisode(index)"
        >
          <div class="card-image">
            <div class="card-img-abs">
              <IconPlayVideoPodcast />
            </div>
            <img :src="item.img" :alt="`img${index}`" class="img-fluid shadow" />
          </div>
          <h2 class="h2 title-podcast">{{ item.title }}</h2>
          <p class="card-post-time">
            <span style="font-family: 'avenir lt'">{{ item.post_time }}</span> |
            <span style="font-family: 'avenir lt'">{{ item.time_read }}</span>
          </p>
          <p class="card-content">{{ item.content }}</p>
        </RouterLink>
      </div>
      <div v-else>
        <div class="d-flex justify-content-center align-items-center flex-column not-found-container">
          <p class="not-found-title">No results for ‘{{ valueSearch }}’</p>
          <p class="not-found-title">Try another search</p>
          <p class="clear-text-input-not-found" @click="handleDeleteValueSearch">Clear Search</p>
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
  margin-top: 8rem;
}

.aside-container {
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 5rem 0;
}

.sub-title {
  margin-top: 0;
}

.sub-title__desc {
  font-size: 1.5rem;
  font-family: 'avenir lt';
  margin-top: 1.6rem;
}

.separate {
  @include widthSession();
  display: inline-block;
  border-top: 1px solid $black-color;
  height: 0.5rem;
  margin: 6rem 8rem 8rem 8rem;
}

.header-container {
  @include widthSession();
  width: 65%;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.icon-item {
  & ~ .icon-item {
    margin-left: 1.4rem;
  }
}

.sub-title__content {
  font-size: 1.5rem;
  font-family: 'avenir lt';
  margin-top: 2rem;
}

.search-container {
  margin-top: 5rem;
  width: 50%;
  border: 1px solid transparent;
  border-radius: 4px;

  &:focus-within {
    border: 1px solid $black-color;
  }
}

.span-input-search {
  background-color: transparent;
  font-size: 1.6rem;
  margin-right: 0.4rem;
}

.input-search {
  height: 3.4rem;
  font-family: 'avenir lt';
  font-size: 1.5rem;
  padding-left: 0.6rem;
  position: relative;
  z-index: 1;
  opacity: 0.6;

  &:focus {
    border: none;
    box-shadow: none;
    background-color: transparent;
    opacity: 1;
  }

  &:hover::placeholder {
    opacity: 1;
    color: $black-color;
  }

  &:not(:placeholder-shown) {
    border-bottom: 1px solid #000;
    border-radius: 0;
    opacity: 1;
  }

  &:not(:placeholder-shown) ~ .span-input-search-icon-delete {
    display: block;
    cursor: pointer;
  }
}

.span-input-search-icon-delete {
  display: none;
  background-color: transparent;
  border-radius: 0;
  border-bottom: 1px solid $black-color;
  font-size: 1.6rem;
}

.card-image {
  position: relative;
  z-index: 1;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    opacity: 0;
    transition: opacity 0.2s ease-in;
  }
}

.card-img-abs {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  opacity: 0;
}

.card-container {
  cursor: pointer;

  &:hover > .card-image::after {
    opacity: 1;
  }

  &:hover > .card-image > .card-img-abs {
    opacity: 1;
    transition: opacity 0.2s ease-in;
  }
}

.title-podcast {
  padding: 0.2rem 0;
  margin-top: 2rem;
  font-size: 2.5rem;
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-clamp: 2;
  -webkit-line-clamp: 2;
}

.card-post-time {
  text-align: left;
  font-size: 1.4rem;
  line-height: 1.5;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  opacity: 0.6;
  margin-bottom: 1.8rem;
}

.card-content {
  text-align: left;
  font-family: 'avenir lt';
  font-size: 15px;
  line-height: 1.5;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  max-height: 67.5px;
}

.not-found-container {
  padding: 10rem;
}

.not-found-title {
  font-size: 2.6rem;
  font-family: 'avenir lt';
  max-width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  text-align: center;
}

.clear-text-input-not-found {
  color: $black-color;
  font-family: 'avenir lt';
  font-size: 16px;
  line-height: 1.5;
  font-style: normal;
  font-weight: normal;
  text-decoration: underline;
  cursor: pointer;
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

  .icon-container {
    align-items: center;
    justify-content: center;
  }

  .search-container {
    width: 100%;
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
