<template>
  <q-layout view="hHh Lpr fFf">

    <q-header elevated class="bg-negative text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img alt="logo" src="../assets/logo.png">
          </q-avatar>
          TB Koch
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-tabs align="right">
        <q-route-tab to="/" label="Noticias" />
        <q-route-tab to="/pacientes" label="Pacientes" />
        <q-route-tab to="/paginaSobre" label="Sobre nós" />
      </q-tabs>

    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-negative text-white" height-hint="98">
    <div> link e mais links depois</div>
  </q-footer>
  </q-layout>

</template>

<script>
const linkList = [
  {
    title: 'Pacientes',
    caption: 'lista de Pacientes',
    icon: 'school',
    name: 'pacientes',
  },
  {
    title: 'Pacientes',
    caption: 'lista de Pacientes',
    icon: 'school',
    name: 'pacientes',
  },
];
import { ref } from 'vue';

export default {
  setup() {
    const rightDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },

  data() {
    return {
      linkList,
    };
  },
};

</script>
