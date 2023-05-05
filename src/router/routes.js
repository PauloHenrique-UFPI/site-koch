const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/pacientes', name: 'pacientes', component: () => import('pages/paginaPaciente.vue') },
      { path: '/paginaSobre', name: 'paginaSobre', component: () => import('pages/paginaSobre.vue') },
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
