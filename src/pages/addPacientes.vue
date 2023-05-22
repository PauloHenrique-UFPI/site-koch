<template>
  <q-page class="page flex justify-center">
    <div class="container" style="width: 100%; height: 80%;">
      <div class="add" style="position: abs;">
        <q-fab
        v-model="fabRight"
        vertical-actions-align="right"
        color="red"
        glossy
        icon="keyboard_arrow_up"
        direction="up"
        >
          <q-fab-action  color="green"  icon="save" label="Salvar" />
          <q-fab-action  color="red" @click="onClick" icon="delete" label="Resetar" />
          <q-fab-action  color="blue" @click="onClick" icon="cancel" label="Cancelar" />
        </q-fab>
      </div>
    <q-card class="card" style="width: 80%; height: 80%;">

      <div class="item">
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

        <div class="q-gutter-md row items-start">
          <div style="font-size: medium; color: grey;">Data de Nascimento</div>
          <q-date class="campo" v-model="date" />
        </div>

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

      <div class="item">
        <h4 class="campo"><q-icon name="edit" color="red" /> Endereço </h4>
        <q-input
          filled
          type="text"
          v-model="endereco"
          label="Endereço *"
          lazy-rules
          class="campo"
          :rules="[
            val => val !== null && val !== '' || 'Digite um Endereço valido !',
            val => val > 0 && val < 100 || 'Digite um Endereço valido !'
          ]"
        />

        <q-input
          filled
          type="text"
          v-model="municipio"
          label="Municipio *"
          lazy-rules
          class="campo"
          :rules="[
            val => val !== null && val !== '' || 'Digite um Municipio valido !',
            val => val > 0 && val < 100 || 'Digite um Municipio valido !'
          ]"
        />

        <q-input
          filled
          type="text"
          v-model="ref"
          label="Ponto de Refencia *"
          lazy-rules
          class="campo"
          :rules="[
            val => val !== null && val !== '' || '',
            val => val > 0 && val < 100 || ''
          ]"
        />

        <q-input
          filled
          type="number"
          v-model="numero"
          label="Nº Telefone *"
          lazy-rules
          class="campo"
          :rules="[
            val => val !== null && val !== '' || 'Please type your age',
            val => val > 0 && val < 100 || 'Please type a real age'
          ]"
        />

      </div>

      <div class="item">
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
const listaNoticias = [
  {
    titulo: 'Campanha de prevenção a Tuberculose',
    data: '12/12/2012',
    img: 'https://cdn-icons-png.flaticon.com/512/5110/5110429.png',
    descricao: 'Novo estudo indica aumento nos casos de tuberculose em países de baixa e média renda.',
    textoCompleto: '\t Um novo estudo publicado na revista científica Lancet Global Health indica um aumento nos casos de tuberculose em países de baixa e média renda. \n\t A pesquisa apontou que, em 2020, o número de pessoas com a doença nessas regiões aumentou em 1,4 milhão em relação a 2019, o que representa um retrocesso de mais de uma década nos avanços na luta contra a tuberculose.\n\t Os autores do estudo alertam para a interrupção dos serviços de saúde e programas de combate à tuberculose durante a pandemia da COVID-19, o que contribuiu para o aumento dos casos. A interrupção do diagnóstico precoce e tratamento adequado pode levar a um agravamento da doença e a um aumento da transmissão. \n\t A tuberculose é uma doença infecciosa que afeta principalmente os pulmões e é causada pela bactéria Mycobacterium tuberculosis. É transmitida pelo ar, quando uma pessoa infectada tosse ou espirra. Os sintomas incluem tosse prolongada, febre, sudorese noturna e perda de peso. O tratamento da tuberculose é feito com antibióticos e pode durar de seis meses a dois anos, dependendo da forma da doença. \n\t A Organização Mundial da Saúde (OMS) estabeleceu uma meta de acabar com a epidemia de tuberculose até 2030, mas o aumento dos casos em países de baixa e média renda pode tornar essa meta difícil de alcançar. A OMS recomenda a melhoria dos serviços de saúde, o investimento em pesquisa e o fortalecimento dos programas de combate à tuberculose para reduzir a incidência da doença.',
  },
];

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      listaNoticias,
    };
  },
  setup() {
    return {
      model: ref(null),
      options: [
        'Brasil', 'Estados Unidos', 'Equador', 'etc',
      ],
    };
  },

  // setup() {
  //   // const pokemons = ref([]);

  //   const fetchPokemons = async () => api.get('/pokemon?limit=20').then((response) => {
  //     console.log(response);
  //   });

  //   onMounted(fetchPokemons);
  // },
});

</script>

<style lang="scss">
.page {

  &__list{
    width: 80%;
  }
}
.baixo{
position: relative;
top: 100px;
width: 100%;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Ajuste a altura conforme necessário */
}
.campo{
  margin-bottom: 15px;
}
.card {
  width: 60%;
  height: 70%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 2%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  justify-items: center;

  /* Outros estilos do card */
}
.data{
  max-width: 50;
}
.add{
  position: fixed;

  left:85%;
  top: 85%;
  z-index: 2;

}

</style>
