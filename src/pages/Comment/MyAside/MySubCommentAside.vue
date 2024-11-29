<template>
  <div class="mb-5 mt-4 ms-3 me-3">
    <span class="cmt">Comments</span>
    <div class="mt-4">
      <div
        v-for="(item, index) in story.comments"
        :key="index"
        class="d-flex justify-content-between align-items-center"
      >
        <div class="mt-4 mb-4">
          <strong class="span1" style="font-weight: 700">{{ item.username }}:</strong> <br />
          <span class="content text-break me-5 d-block">{{ item.content }}</span>
        </div>
        <div class="d-flex" v-if="item.username === login.value.username">
          <span @click="handleGetMyComment(index)"
            ><font-awesome-icon :icon="['fas', 'pen']" style="font-size: 1.4rem; cursor: pointer"
          /></span>
          <span class="ms-2 me-2"></span>
          <span @click="handleDelete(index)">
            <font-awesome-icon :icon="['fas', 'trash']" style="font-size: 1.4rem; cursor: pointer"
          /></span>
        </div>
      </div>
    </div>
    <span class="separate mt-5 d-block"></span>

    <div class="comment-container p-3">
      <span v-if="!isShowCmt" class="span1 mt-4 d-block" @click="handleShowCmt">Write a comment...</span>

      <div v-if="isShowCmt">
        <textarea
          type="text"
          placeholder="Write a comment..."
          class="w-100 my-input mt-4"
          v-model="commentContent"
        ></textarea>

        <div class="btnSubscribeContainer d-flex justify-content-end mt-3 align-items-center">
          <span class="me-5 span2" @click="handleHideCmt">Cancel</span>
          <button class="btnSubscribe" @click="handlePostMyComment">
            <span class="btnSubscribeTitle">{{ isUpdate ? 'Update' : 'Publish' }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLoginStore } from '@/stores/login';
import { useListStoryStore } from '@/stores/stories';
import { computed, ref } from 'vue';

const isShowCmt = ref(false);
const commentContent = ref('');
const isUpdate = ref(false);
const indexUpdate = ref(null);

const handleShowCmt = () => {
  isShowCmt.value = true;
};

const handleHideCmt = () => {
  isShowCmt.value = false;
};

const { handleShowLoginModal, login } = useLoginStore();
const {
  indexList,
  handlePostComment,
  handleShowItemByIndex,
  handleGetComment,
  handleUpdateComment,
  handleDeleteByIndex,
} = useListStoryStore();
const story = computed(() => handleShowItemByIndex(indexList));

const handlePostMyComment = () => {
  if (!login.value?.is_login) {
    handleShowLoginModal();
    return;
  }

  if (!commentContent.value.trim()) {
    alert('Please enter a comment!');
    return;
  }

  if (isUpdate.value) {
    if (indexUpdate.value === null) return;
    handleUpdateComment(indexList, indexUpdate.value, commentContent.value);
    isUpdate.value = false;
    commentContent.value = '';
    indexUpdate.value = null;
    return;
  }

  handlePostComment(login.value?.username, commentContent.value, indexList);
  commentContent.value = '';
};

const handleGetMyComment = (index) => {
  isUpdate.value = true;
  isShowCmt.value = true;
  indexUpdate.value = index;
  const getContent = handleGetComment(indexList, index);
  commentContent.value = getContent.content;
};

const handleDelete = (index) => {
  handleDeleteByIndex(indexList, index);
};
</script>

<style lang="scss" scoped>
@use '/src/assets/global.scss' as *;
@use '/src/pages/Home/mixins.scss' as *;

.cmt {
  font-size: 1.6rem;
}

.separate {
  display: block;
  border-top: 1px solid #999;
  height: 0.5em;
}

.span1 {
  font-size: 1.6rem;
  cursor: pointer;
}

.content {
  font-size: 1.4rem;
}

.span2 {
  font-family: 'avenir lt', sans-serif;
  cursor: pointer;
  font-size: 1.4rem;

  &:hover {
    color: blue;
  }
}

.my-input {
  font-size: 1.6rem;
  border: none;
  outline: none;
  background-color: transparent;
  box-shadow: none;
  padding: 0;

  &::placeholder {
    font-size: 1.6rem;
    color: #000;
  }

  &:focus {
    border: none;
    outline: none;
    background-color: transparent;
    box-shadow: none;
  }
}

.center-button-sm {
  ~ .center-button-sm {
    margin-top: 3rem;
  }
}

.podcast-container__aside--btn-read-more {
  font-family: 'avenir lt', sans-serif;
  font-size: 1.5rem;
  width: 15.5rem;
  height: 3.4rem;
  border: 1px solid $black-color;
  border-radius: 0;
  transition:
    background 0.2s ease-in,
    color 0.2s ease-in,
    border-color 0.2s ease-in;

  &:hover {
    background-color: #4f4768;
    border-color: #4f4768;
    color: $white-color;
  }

  &.padding-di {
    height: 5rem;
  }
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
