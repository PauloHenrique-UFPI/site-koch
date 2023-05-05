<template>
  <q-layout view="hHh Lpr lFr">

    <q-header elevated class="bg-negative text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://imgcloud.com.br/share/xKksQWxPiCgjptlc">
          </q-avatar>
          TB Koch
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-drawer v-model="rightDrawerOpen" show-if-above bordered>
        <q-list>
          <div v-for="(link, index) in linkList" v-bind:key="index">
            <q-item clickable :to="{ name: `${link.name}`}">
              <q-item-section avatar>
                <q-icon :name="link.icon" />
              </q-item-section>
            </q-item>
          </div>

        </q-list>
      </q-drawer>
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
