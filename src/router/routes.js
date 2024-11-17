const publicRoutes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/pages/Home/MyHome.vue'),
      },
      {
        path: '/podcast',
        name: 'podcast',
        component: () => import('@/pages/Podcast/MyPodcast.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/pages/About/MyAbout.vue'),
      },
    ],
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
