const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/member',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'join', component: () => import('pages/member/JoinPage.vue') },
      { path: 'login', component: () => import('pages/member/LoginPage.vue') },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
