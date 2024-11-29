import { defineStore } from 'pinia';
import { reactive } from 'vue';

import img1 from '/src/components/imgs/blog-img1.png';
import img2 from '/src/components/imgs/blog-img2.png';
import img3 from '/src/components/imgs/blog-img3.png';
import img4 from '/src/components/imgs/blog-img5.png';
import img5 from '/src/components/imgs/blog-img6.png';
import img6 from '/src/components/imgs/blog-img4.png';
import useSessionStorage from '@/components/hooks/useSessionStorage';

export const useListStoryStore = defineStore('stories', () => {
  const indexList = useSessionStorage('indexStory', 0);

  const list = reactive([
    {
      img_path: img1,
      time_post: 'May 28, 2023',
      time_read: '2 min read',
      icon_ellipsis_path: '/src/components/svg/ellipsis-icon.svg',
      title: 'Is There a Wrong Way of Praying?',
      desc: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....',
      views_count: 0,
      comments_count: 0,
      likes_count: 1,
      is_liked: false,
      comments: [],
    },
    {
      img_path: img2,
      time_post: 'May 28, 2023',
      time_read: '1 min read',
      icon_ellipsis_path: '/src/components/svg/ellipsis-icon.svg',
      title: '5 Spiritual Disciplines to Lighten Your Load',
      desc: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....',
      views_count: 1,
      comments_count: 0,
      likes_count: 0,
      is_liked: false,
      comments: [],
    },
    {
      img_path: img3,
      time_post: 'May 28, 2023',
      time_read: '2 min read',
      icon_ellipsis_path: '/src/components/svg/ellipsis-icon.svg',
      title: 'How Can You Learn to Trust God?',
      desc: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....',
      views_count: 0,
      comments_count: 0,
      likes_count: 2,
      is_liked: false,
      comments: [],
    },
    {
      img_path: img4,
      time_post: 'May 28, 2023',
      time_read: '2 min read',
      icon_ellipsis_path: '/src/components/svg/ellipsis-icon.svg',
      title: 'Can I Question God and Still Have Faith?',
      desc: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....',
      views_count: 0,
      comments_count: 0,
      likes_count: 3,
      is_liked: false,
      comments: [],
    },
    {
      img_path: img5,
      time_post: 'May 28, 2023',
      time_read: '1 min read',
      icon_ellipsis_path: '/src/components/svg/ellipsis-icon.svg',
      title: 'Do I Need a Spiritual Mentor?',
      desc: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....',
      views_count: 0,
      comments_count: 0,
      likes_count: 1,
      is_liked: false,
      comments: [],
    },
    {
      img_path: img6,
      time_post: 'May 28, 2023',
      time_read: '1 min read',
      icon_ellipsis_path: '/src/components/svg/ellipsis-icon.svg',
      title: '15 Motivational Quotes When You’re Down',
      desc: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....',
      views_count: 0,
      comments_count: 0,
      likes_count: 0,
      is_liked: false,
      comments: [],
    },
  ]);

  const lengthList = list.length;

  const handleShowItemByIndex = (index) => {
    if (index < 0 || index >= lengthList) {
      return null;
    }
    return list[index];
  };

  const handleLikeAStory = (index) => {
    const story = list[index];

    story.is_liked = !story.is_liked;

    if (story.is_liked) {
      story.likes_count++;
    } else {
      story.likes_count--;
    }
  };

  const setIndexList = (index) => {
    if (index < 0) indexList.value = 0;
    else if (index >= lengthList) indexList.value = lengthList - 1;
    else indexList.value = index;
  };

  const handlePostComment = (username, content, index) => {
    const story = list[index];

    const newComment = { username, content };

    story.comments = [...story.comments, newComment];
    story.comments_count++;
  };

  const handleGetComment = (indexStory, indexComment) => {
    const story = list[indexStory];
    return story.comments[indexComment];
  };

  const handleUpdateComment = (indexStory, indexComment, content) => {
    const story = list[indexStory];
    story.comments[indexComment].content = content;
  };

  const handleDeleteByIndex = (indexStory, indexComment) => {
    const story = list[indexStory];
    story.comments.splice(indexComment, 1);
    story.comments_count--;
  };

  return {
    handleShowItemByIndex,
    indexList,
    lengthList,
    setIndexList,
    handleLikeAStory,
    handlePostComment,
    handleGetComment,
    handleUpdateComment,
    handleDeleteByIndex,
  };
});
