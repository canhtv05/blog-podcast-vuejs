import { defineStore } from 'pinia';
import { reactive } from 'vue';

import img1 from '@/components/imgs/blog-img10.png';
import img2 from '@/components/imgs/blog-img11.png';
import img3 from '@/components/imgs/blog-img12.png';
import img4 from '@/components/imgs/blog-img13.png';
import img5 from '@/components/imgs/blog-img14.png';
import img6 from '@/components/imgs/blog-img15.png';
import useSessionStorage from '@/components/hooks/useSessionStorage';

export const useListPodCastStore = defineStore('podcast', () => {
  const indexList = useSessionStorage('indexPodCast', 0);

  const list = reactive([
    {
      img: img1,
      title: 'Finding Fulfillment in Community Life',
      post_time: '9/29/2023',
      time_read: '10 min',
      content: 'Do you have video episodes in your podcast? Any podcast episodes will get a video player.',
      path_sound: 'https://static.wixstatic.com/mp3/6acf09_6d7ec06f961c479881a63aaa2387863d.mp3',
    },
    {
      img: img2,
      title: 'Hosting: Rev Martha Bailes',
      post_time: '9/15/2023',
      time_read: '12 min',
      content:
        'Any changes you make to your podcast, like adding or editing an episode, will automatically be updated on your player.',
      path_sound: 'https://static.wixstatic.com/mp3/6acf09_6d7ec06f961c479881a63aaa2387863d.mp3',
    },
    {
      img: img3,
      title: 'Sunday Pod: Whole & Holy',
      post_time: '9/1/2023',
      time_read: '5 min',
      content: 'Every episode automatically gets its own page. Visitors can watch, listen and download each episode.',
      path_sound: 'https://static.wixstatic.com/mp3/6acf09_6d7ec06f961c479881a63aaa2387863d.mp3',
    },
    {
      img: img4,
      title: 'Hosting Rev. John Watkins',
      post_time: '8/18/2023',
      time_read: '21 min',
      content:
        'Customize the look and feel of the player to match your site. Your podcast will look and sound awesome!',
      path_sound: 'https://static.wixstatic.com/mp3/6acf09_6d7ec06f961c479881a63aaa2387863d.mp3',
    },
    {
      img: img5,
      title: 'When You Feel Your Prayers Aren’t Working',
      post_time: '8/17/2020',
      time_read: '5 min',
      content:
        'Any changes you make to your podcast, like adding or editing an episode, will automatically be updated on your player.',
      path_sound: 'https://static.wixstatic.com/mp3/6acf09_6d7ec06f961c479881a63aaa2387863d.mp3',
    },
    {
      img: img6,
      title: 'What Does “Faith Alone” Mean',
      post_time: '8/17/2020',
      time_read: '5 min',
      content: 'Every episode automatically gets its own page. Visitors can watch, listen and download each episode.',
      path_sound: 'https://static.wixstatic.com/mp3/6acf09_6d7ec06f961c479881a63aaa2387863d.mp3',
    },
  ]);

  const lengthList = list.length;

  const handleShowItemByIndex = (index) => {
    if (index < 0 || index >= lengthList) {
      return null;
    }
    return list[index];
  };

  const setIndexList = (index) => {
    if (index < 0) indexList.value = 0;
    else if (index >= lengthList) indexList.value = lengthList - 1;
    else indexList.value = index;
  };

  const handleNextItem = () => {
    if (indexList.value < lengthList - 1) {
      // indexList.value += 1;
      return list[indexList.value];
    }
    return null;
  };

  const handlePrevItem = () => {
    if (indexList.value > 0) {
      // indexList.value -= 1;
      return list[indexList.value];
    }
    return null;
  };

  return { handleShowItemByIndex, handleNextItem, indexList, handlePrevItem, lengthList, setIndexList };
});
