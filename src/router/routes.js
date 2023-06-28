import MainLayout from 'layouts/MainLayout.vue';
import LoginPage from 'pages/login.vue';
import LoginLayout from 'layouts/LoginLayout.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [

      { path: '/home', name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: '/pacientes', name: 'pacientes', component: () => import('pages/paginaPaciente.vue') },
      { path: '/paginaSobre', name: 'paginaSobre', component: () => import('pages/paginaSobre.vue') },
      { path: '/addNoticias', name: 'addNoticia', component: () => import('pages/addNoticias.vue') },
      { path: '/addPacientes', name: 'addPaciente', component: () => import('pages/addPacientes.vue') },
      {
        path: '/noticia/:id',
        name: 'NoticiaPage',
        component: () => import('pages/noticia.vue'),
      },
      {
        path: '/paciente/:id',
        name: 'PacientePage',
        component: () => import('pages/paciente.vue'),
      },

    ],
  },

  {
    path: '',
    component: LoginLayout,
    children: [
      { path: '', name: 'login_', component: LoginPage },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
