<template>
  <div class="p-3"></div>
  <strong style="font-weight: 700" class="strong1">Design with Ease</strong>
  <div class="p-3"></div>
  <span class="span1" style="font-weight: 700"
    >“Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more
    editorial style blog - there’s a stunning layout for everyone.”
  </span>
  <div class="p-3"></div>
  <span class="span2">
    Every layout comes with the latest social features built in. Readers will be able to easily share posts on social
    networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With Wix,
    building your online community has never been easier.
  </span>
  <div class="p-3"></div>
  <strong style="font-weight: 700" class="strong1">Create Relevant Content</strong>
  <div class="p-3"></div>
  <span class="span2">
    You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow
    readers to explore more of what interests them. Each category of your blog has its own page that’s fully
    customizable. Add a catchy title, a brief description and a beautiful image to the category page header to truly
    make it your own. You can also add tags (#vacation #dream #summer) throughout your posts to reach more people, and
    help readers search for relevant content. Using hashtags can expand your post reach and help people find the content
    that matters to them. Go ahead, #hashtag away.
  </span>
  <div class="p-3"></div>
  <span class="span1" style="font-weight: 700">“Be original, show off your style, and tell your story.” </span>
  <div class="p-3"></div>
  <span class="span2">
    Blogging gives your site a voice, so let your business’ personality shine through. Are you a creative agency? Go
    wild with original blog posts about recent projects, cool inspirational ideas, or what your company culture is like.
    Add images, and videos to really spice it up, and pepper it with slang to keep readers interested. Are you a
    programmer? Stay on the more technical side by offering weekly tips, tricks, and hacks that show off your knowledge
    of the industry. No matter what type of business you have, one thing is for sure - blogging gives your business the
    opportunity to be heard in a way in a different and unconventional way.
  </span>
  <div class="p-3"></div>
  <strong style="font-weight: 700" class="strong1">Get Inspired</strong>
  <div class="p-3"></div>
  <span class="span2">
    To keep up with all things Wix, including website building tips and interesting articles, head over to the Wix Blog.
    You may even find yourself inspired to start crafting your own blog, adding unique content, and stunning images and
    videos. Start creating your own blog now. Good luck!
  </span>
  <div class="p-5"></div>
  <div class="separate"></div>
  <div class="d-flex align-items-center container-icon" style="margin-bottom: 0.4rem">
    <span v-for="(icon, index) in listIcon" :key="index">
      <component :is="icon" class="m-4 icon-ok" />
    </span>
  </div>
  <div class="separate"></div>
  <div
    class="all-stories__content-item--info-wrapper__desc-wrapper__comment-area d-flex justify-content-between align-items-center"
  >
    <div class="d-flex justify-content-start align-items-center">
      <div class="d-flex align-items-center">
        <span class="all-stories__content-item--info-wrapper__desc-wrapper__comment-area__text"
          >{{ currentStory.views_count }} views</span
        >
        <span class="all-stories__content-item--info-wrapper__desc-wrapper__comment-area__text"
          >{{ currentStory.comments_count }} comments</span
        >
      </div>
    </div>
    <div class="h-100 d-flex justify-content-center align-items-center">
      <span class="all-stories__content-item--info-wrapper__desc-wrapper__comment-area__text me-2">{{
        currentStory.likes_count > 0 ? currentStory.likes_count : ''
      }}</span>
      <div @click="handleLike" style="cursor: pointer">
        <IconHeartSolid v-if="currentStory.is_liked" />
        <IconHeartBorder v-else />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, shallowRef } from 'vue';
import { useListStoryStore } from '@/stores/stories';
import IconFaceBook from '@/components/icons/IconFaceBook.vue';
import IconLink from '@/components/icons/IconLink.vue';
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue';
import IconX from '@/components/icons/IconX.vue';
import IconHeartBorder from '@/components/icons/IconHeartBorder.vue';
import IconHeartSolid from '@/components/icons/IconHeartSolid.vue';

const listIcon = shallowRef([IconFaceBook, IconX, IconLinkedIn, IconLink]);

const { indexList, handleShowItemByIndex, handleLikeAStory } = useListStoryStore();

const currentStory = computed(() => handleShowItemByIndex(indexList));

const handleLike = () => {
  handleLikeAStory(indexList);
};
</script>

<style lang="scss" scoped>
@use '/src/assets/global.scss' as *;

.strong1 {
  font-size: 1.5rem;
  font-family: 'avenir lt', sans-serif;
}

.span1 {
  font-family: 'avenir lt', sans-serif;
  font-size: 1.8rem;
  font-style: italic;
  position: relative;
  display: block;
  padding: 0 2rem;

  &::after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: $primary-1;
  }
}

.span2 {
  font-family: 'avenir lt', sans-serif;
  font-size: 1.5rem;
}

.separate {
  border-top: 1px solid $black-color;
  height: 0.5rem;
}

.icon-ok {
  cursor: pointer;
  &:hover {
    color: blue;
  }
}

.all-stories__content-item--info-wrapper__desc-wrapper__comment-area {
  height: 3.4rem;
}

.all-stories__content-item--info-wrapper__desc-wrapper__comment-area__text {
  font-size: 1.4rem;
  font-family: 'avenir lt', sans-serif;

  &:not(:first-of-type) {
    margin-left: 2rem;
  }
}

@media (max-width: 768px) {
  .span1 {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .container-icon {
    justify-content: center;
  }
}
</style>
