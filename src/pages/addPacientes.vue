<template>
  <q-page class="page flex justify-center">
    <div class="q-pa-lg" style="min-width: 50%; max-width: 50%;">

    <q-card class="my-card">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
      <h4 class="campo"><q-icon name="edit" color="red" /> Dados Pessoais </h4>

        <q-input
          filled
          v-model="titulo"
          label="Nome *"
          hint="Nome do Paciente"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Por favor digite um nome']"
        />

        <q-input
          filled
          v-model="prefacio"
          label="Nome da Mãe *"
          hint="Nome da Mãe do Paciente"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Por favor digite nome da Mãe']"
        />

          <q-input filled v-model="date"  label="Data de Nascimento *"
          hint="Data de nascimento do paciente" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="date">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

        <h4 class="campo"><q-icon name="edit" color="red" /> Endereço </h4>
        <q-input
          filled
          v-model="prefacio"
          label="Endereço*"
          hint="Rua, Bairro e Logadouro"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Por favor digite nome da Mãe']"
        />
        <q-input
          filled
          v-model="prefacio"
          label="Município*"
          hint="Rua, Bairro e Logadouro"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Por favor digite nome da Mãe']"
        />
        <q-input
          filled
          v-model="prefacio"
          label="Referência*"
          hint="Ponto de Referência"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Por favor digite nome da Mãe']"
        />
        <q-input
          filled
          type="number"
          v-model="numero"
          label="Nº Telefone *"
          hint="Número para contato"
          lazy-rules
          class="campo"
          :rules="[
            val => val !== null && val !== '' || 'Please type your age',
            val => val > 0 && val < 100 || 'Please type a real age'
          ]"
        />
        <h4 class="campo"><q-icon name="edit" color="red" /> SUS </h4>
        <div class="">
            <div class="q-px-sm">
              Forma: <strong>{{ shape }}</strong>
            </div>
            <q-radio v-model="shape" checked-icon="task_alt"
            unchecked-icon="panorama_fish_eye" val="line" label="Pulmonar" />
            <q-radio v-model="shape" checked-icon="task_alt"
            unchecked-icon="panorama_fish_eye" val="rectangle" label="Negativa" />
            <q-radio v-model="shape" checked-icon="task_alt"
            unchecked-icon="panorama_fish_eye" val="ellipse" label="Não realizada" />
            <q-radio v-model="shape" checked-icon="task_alt"
            unchecked-icon="panorama_fish_eye" val="polygon" label="Não se aplica" />
        </div>
        <q-file filled bottom-slots v-model="img" label="Imagem" counter>
          <template v-slot:prepend>
            <q-icon name="cloud_upload" @click.stop.prevent />
          </template>
          <template v-slot:append>
            <q-icon name="close" @click.stop.prevent="model = null" class="cursor-pointer" />
          </template>

          <template v-slot:hint>
            Imagem
          </template>
        </q-file>

        <div>
          <q-btn label="Enviar" type="submit"  @click="submitForm" icon="send" color="red"/>

          <q-btn label="Cancelar" to="/home" color="primary" flat/>
        </div>
      </q-form>
  </q-card>
  </div>

  </q-page>
</template>

<script>

import { defineComponent, ref } from 'vue';
import { api } from 'boot/axios';

export default defineComponent({
  data() {
    return {
      titulo: '',
      prefacio: '',
      img: null, // Alterado para null em vez de uma string vazia
      descricao: '',
      date: ref('2000/00/00'),
      loading: false,
    };
  },
  setup() {
    return {
      model: ref(null),
    };
  },
  methods: {
    async submitForm(event) {
      event.preventDefault();

      try {
        const token = localStorage.getItem('token');
        const formData = new FormData(); // Criar objeto FormData

        // Adicionar campos ao objeto FormData
        formData.append('titulo', this.titulo);
        formData.append('img', this.img);
        formData.append('desc_curta', this.prefacio);
        formData.append('desc_longa', this.descricao);

        const response = await api.post('https://api-koch.onrender.com/create-new', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data', // Definir o cabeçalho correto para enviar o arquivo
          },
        });

        console.log(response);
        this.$router.push('/home');
      } catch (error) {
        console.log(error);
        alert(error.request.response);
      } finally {
        this.loading = false; // Desativar a animação de carregamento
      }
    },
  },
});

</script>

<style lang="scss">

.baixo{
position: relative;
top: 100px;
width: 100%;
}
.my-card{
  top: 10%;
  padding: 10%;
  width: 100%;
}
</style>
