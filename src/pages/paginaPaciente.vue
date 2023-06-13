<template>
  <q-page class="page_noticias flex justify-center">
    <div class="pagina_noticia-List__lits " >

      <div class="add" style="position: abs;">
        <q-fab
        v-model="fabRight"
        vertical-actions-align="right"
        color="red"
        glossy
        icon="keyboard_arrow_up"
        direction="up"
        >
          <q-fab-action  color="green" to="/addPacientes" icon="add" label="Add Paciente" />
          <q-fab-action  color="red" @click="onClick" icon="delete" label="Deletar" />
        </q-fab>
      </div>
      <div class="q-my-lg">
        <q-list class="q-gutter-y-md">
          <div class="q-ma-md q-pa-md"
         style="display: flex; flex-wrap: wrap; justify-content: center;">
          <div v-for="(post, index) in lista"
          :key="index" class="q-ma-sm" style="flex-basis: 22%;">
            <q-card class="my-card" flat bordered>
              <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                  <div class="text q-mt-sm q-mb-xs"> {{ post.nome }} </div>
                  <div class="text-overline">{{ post.unidade_tratamento }}</div>
                  <div class="text-caption text-grey">
                    {{ post.profissao }}
                  </div>
                </q-card-section>

              </q-card-section>

              <q-separator />

              <q-card-actions>
                <q-btn flat color="negative">
                  Ver Ficha
                </q-btn>
              </q-card-actions>
            </q-card>

          </div>
          </div>
        </q-list>

      </div>
    </div>
  </q-page>
</template>

<script>

import { defineComponent } from 'vue';
import { api } from 'boot/axios';

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      lista: [],
    };
  },

  mounted() {
    this.carregaPaciente();
  },
  methods: {
    async carregaPaciente() {
      const token = localStorage.getItem('token');
      try {
        const response = await api.get('https://api-koch.onrender.com/pacientes', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.lista = response.data.groups;
        this.isLoading = false;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        this.isLoading = false;
      }
    },
  },
});

</script>

<style lang="scss">
.page_noticias {

  &__list{
    width: 80%;
  }
}
.add{

position: fixed;

left:85%;
top: 85%;

}
</style>
