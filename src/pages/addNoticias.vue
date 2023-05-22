<template>
  <q-page class="page flex justify-center">
    <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
    <div><h2>Noticia</h2></div>
      <q-input
        filled
        v-model="titulo"
        label="Título *"
        hint="Título para sua Noticia"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor digite um título']"
      />
      <q-input
        filled
        v-model="prefacio"
        label="Préfacio *"
        hint="Breve descrição da noticia"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor digite um Préfacio']"
      />

      <q-file filled bottom-slots v-model="model" label="Imagem" counter>
        <template v-slot:prepend>
          <q-icon name="cloud_upload" @click.stop.prevent />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click.stop.prevent="model = null" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          Imagem para ser anexada a notica
        </template>
      </q-file>

      <q-editor
                  v-model="selectedNoteBody"
                  min-height="5rem"
                  label="Nota"
                  filled
                  autogrow
                  :rules="[(val) => val.length != 0 || 'Nota inválida']"
                  :toolbar="[
                    [
                      {
                        label: $q.lang.editor.align,
                        icon: $q.iconSet.editor.align,
                        fixedLabel: true,
                        list: 'only-icons',
                        options: ['left', 'center', 'right', 'justify'],
                      },
                    ],
                    [
                      'bold',
                      'italic',
                      'strike',
                      'underline',

                    ],
                    ['token', 'custom_btn'],
                    ['print', 'fullscreen'],
                    [

                      {
                        label: $q.lang.editor.fontSize,
                        icon: $q.iconSet.editor.fontSize,
                        fixedLabel: true,
                        fixedIcon: true,
                        list: 'no-icons',
                        options: [
                          'size-1',
                          'size-2',
                          'size-3',
                          'size-4',
                          'size-5',
                          'size-6',
                          'size-7',
                        ],
                      },

                    ],

                  ]"

                />

      <div>
        <q-btn label="Enviar" type="submit" icon="send" color="red"/>
        <q-btn label="Resetar" type="reset" color="green" flat class="q-ml-sm" />
        <q-btn label="Cancelar" to="/" color="primary" flat/>
      </div>
    </q-form>

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
</style>
