<template>
  <q-page class="page_noticias flex justify-center">
    <div class="pagina_noticia-List__lits" style="  display: flex;
  justify-content: center;
  align-items: center;">
    <div v-if="isLoading" class="loading-animation" st></div>

    <div v-else>
      <div class="add" style="position:position: fixed; right: 2rem; bottom: 2rem; ">
        <q-fab
          v-model="fabRight"
          vertical-actions-align="right"
          color="red"
          glossy
          icon="keyboard_arrow_up"
          direction="up"
        >
          <q-fab-action color="green" to="/addPacientes" icon="add" label="Add Paciente" />
          <q-fab-action color="red" @click="deletarAtivo = !deletarAtivo">
                <template v-if="deletarAtivo">
                  <q-icon name="cancel" />
                  Cancelar
                </template>
                <template v-else>
                  <q-icon name="delete" />
                  Deletar
                </template>
              </q-fab-action>
        </q-fab>
      </div>

        <div class="q-my-lg">
          <q-list class="q-gutter-y-md">
            <div class="q-ma-md q-pa-md" style="display:
            flex; flex-wrap: wrap; justify-content: center;">
              <div v-for="(post, index) in lista" :key="index" class="q-ma-sm my-card">
                <q-card class="my-card" @click="deletarAtivo ?
                exibirConfirmacaoDeletar(post.id, index) : exibirNoticia(post)">
                  <q-card-section horizontal>
                    <q-card-section class="q-pt-xs">
                      <div class="text q-mt-sm q-mb-xs"> {{ post.nome }} </div>
                      <div class="text-overline">{{ post.unidade_tratamento }}</div>
                      <div class="text-caption text-grey">
                        {{ post.profissao }}
                      </div>
                    </q-card-section>
                </q-card-section>
              </q-card>

              </div>
            </div>
          </q-list>
        </div>
      </div>
  </div>
  </q-page>

  <q-dialog v-model="confirmacaoDeletar">
      <q-card>
        <q-card-section>
          <q-card-title class="text-h6">Confirmar exclusão</q-card-title>
          <q-card-text>
            Tem certeza de que deseja excluir esta notícia?
          </q-card-text>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Cancelar" color="primary" @click="cancelarExclusao" />
          <q-btn label="Confirmar" color="negative" @click="executarExclusao" />
        </q-card-actions>
      </q-card>
    </q-dialog>

</template>

<script>

import { defineComponent } from 'vue';
import { api } from 'boot/axios';

export default defineComponent({

  data() {
    return {
      lista: [],
      isLoading: true,
      deletarAtivo: false,
      confirmacaoDeletar: false,
      indexExclusao: null,
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
    exibirConfirmacaoDeletar(id, index) {
      this.indexExclusao = index;
      this.id = id;
      if (this.deletarAtivo) {
        this.indexExclusao = index;
        this.confirmacaoDeletar = true;
      }
    },

    cancelarExclusao() {
      this.indexExclusao = null;
      this.confirmacaoDeletar = false;
    },

    async executarExclusao() {
      const token = localStorage.getItem('token');
      if (this.indexExclusao !== null) {
        console.log(this.indexExclusao);
        console.log(this.id);
        try {
          await api.delete(`https://api-koch.onrender.com/delete-paciente/${this.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.lista.splice(this.indexExclusao, 1);
        } catch (error) {
          console.log(error);
        }

        this.cancelarExclusao();
      }
    },
    exibirNoticia(post) {
      const { id } = post;
      this.$router.push({ name: 'PacientePage', params: { id } });
    },

  },
});

</script>

<style lang="scss">

.add{

position: fixed;

left:85%;
top: 85%;

}
.page_noticias {
  &__list {
    width: 80%;
  }
}

.my-card {
  flex-basis: 20%;
  width: 250px;
}

.loading-animation {

width: 100px;
height: 100px;
flex-wrap: wrap;
justify-content: center;
align-items: center;
border: 5px solid #ccc;
border-top-color: #e90808;
border-radius: 50%;
animation: spin 1s linear infinite;
margin: 0 auto;

}

@keyframes spin {
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
}
</style>
