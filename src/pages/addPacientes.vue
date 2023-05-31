<template>
  <q-page class="page flex justify-center">
    <div class="q-pa-lg" style="max-width: 50%; width: 50%;">
      <q-card class="card">
        <div class="item" style="max-width: 60%; width: 60%; padding: auto;">
        <h4 class="campo"><q-icon name="edit" color="red" /> Dados Pessoais </h4>
          <q-input
          filled
          type="text"
          v-model="nome"
          label="Nome do Paciente *"
          lazy-rules
          class="campo"
          :rules="[
            val => val !== null && val !== '' || 'Por favor digite um nome valido !',
            val => val > 0 && val < 100 || 'Por favor digite um nome valido !'
          ]"
        />
        <q-input filled v-model="date" mask="date" :rules="['date']">
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

        <!-- <div class="q-gutter-md row items-start">
          <div style="font-size: medium; color: grey;">Data de Nascimento</div>
          <q-date class="campo" v-model="date" />
        </div> -->

        <q-select  filled v-model="naturalidade" :options="options" label="Naturalidade" />

        <q-input
          filled
          type="text"
          v-model="nomemae"
          label="Nome da Mãe *"
          lazy-rules
          style="margin-bottom: 15px; margin-top: 15px;"
          :rules="[
            val => val !== null && val !== '' || 'Por favor digite um nome valido !',
            val => val > 0 && val < 100 || 'Por favor digite um nome valido !'
          ]"
        />

      </div>

      <div class="item" style="max-width: 60%; width: 60%; padding: auto;">
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
        <q-input
          filled
          type="number"
          v-model="cartaoSUS"
          label="Nº Cartão SUS *"
          lazy-rules
          class="campo"
          :rules="[
            val => val !== null && val !== '' || 'Digite um cartão valido',
          ]"
        />

        <q-input
          filled
          type="number"
          v-model="numero"
          label="Nº Sinan *"
          lazy-rules
          class="campo"
          :rules="[
            val => val !== null && val !== '' || 'Digite um numero valido',
          ]"
        />

        <q-input
          filled
          type="text"
          v-model="trat"
          label="Unidade de Tratamento *"
          lazy-rules
          class="campo"
          :rules="[
            val => val !== null && val !== '' || 'Digite uma Unidade que exista!',
          ]"
        />

        <q-input
          filled
          type="text"
          v-model="cad"
          label="Unidade de Cadastro*"
          lazy-rules
          class="campo"
          :rules="[
            val => val !== null && val !== '' || 'Digite uma Unidade que exista!',
          ]"
        />
      </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({

  setup() {
    return {
      model: ref(null),
      options: [
        'Brasil', 'Estados Unidos', 'Equador', 'etc',
      ],
    };
  },

});

</script>

<style lang="scss">
.conteiner{
  background-color: blueviolet;
}
.card{
  padding: 8%;
  background-color: #ffffff;
  border-radius: 2%;
  display: flex;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  justify-items: center;
}
</style>
