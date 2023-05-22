<template>
  <q-page class="page_noticias flex justify-center">
    <div class="pagina_noticia-List__lits " >
      <div class="text-h2 q-py-lg">Pacientes</div>
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
          <div v-for="(post, index) in listaNoticias" :key="index">
            <q-card class="my-card" flat bordered>
              <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                  <div class="text-overline">Nome Do Paciente</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Unidade de tratamento</div>
                  <div class="text-caption text-grey">
                    nada nada nada
                  </div>
                </q-card-section>

                <q-card-section class="col-5 flex flex-center">
                  <q-img
                    class="rounded-borders"
                    src="https://cdn-icons-png.flaticon.com/512/5110/5110429.png"
                  />
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
        </q-list>
        <!-- lista de Noticias -->
      </div>
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
  {
    titulo: 'Campanha de prevenção a Tuberculose',
    data: '12/12/2012',
    img: 'https://cdn-icons-png.flaticon.com/512/5110/5110429.png',
    descricao: 'Novo estudo indica aumento nos casos de tuberculose em países de baixa e média renda.',
    textoCompleto: '\t Um novo estudo publicado na revista científica Lancet Global Health indica um aumento nos casos de tuberculose em países de baixa e média renda. \n\t A pesquisa apontou que, em 2020, o número de pessoas com a doença nessas regiões aumentou em 1,4 milhão em relação a 2019, o que representa um retrocesso de mais de uma década nos avanços na luta contra a tuberculose.\n\t Os autores do estudo alertam para a interrupção dos serviços de saúde e programas de combate à tuberculose durante a pandemia da COVID-19, o que contribuiu para o aumento dos casos. A interrupção do diagnóstico precoce e tratamento adequado pode levar a um agravamento da doença e a um aumento da transmissão. \n\t A tuberculose é uma doença infecciosa que afeta principalmente os pulmões e é causada pela bactéria Mycobacterium tuberculosis. É transmitida pelo ar, quando uma pessoa infectada tosse ou espirra. Os sintomas incluem tosse prolongada, febre, sudorese noturna e perda de peso. O tratamento da tuberculose é feito com antibióticos e pode durar de seis meses a dois anos, dependendo da forma da doença. \n\t A Organização Mundial da Saúde (OMS) estabeleceu uma meta de acabar com a epidemia de tuberculose até 2030, mas o aumento dos casos em países de baixa e média renda pode tornar essa meta difícil de alcançar. A OMS recomenda a melhoria dos serviços de saúde, o investimento em pesquisa e o fortalecimento dos programas de combate à tuberculose para reduzir a incidência da doença.',
  },

  {
    titulo: 'Campanha de prevenção a Tuberculose',
    data: '12/12/2012',
    img: 'https://cdn-icons-png.flaticon.com/512/5110/5110429.png',
    descricao: 'Novo estudo indica aumento nos casos de tuberculose em países de baixa e média renda.',
    textoCompleto: '\t Um novo estudo publicado na revista científica Lancet Global Health indica um aumento nos casos de tuberculose em países de baixa e média renda. \n\t A pesquisa apontou que, em 2020, o número de pessoas com a doença nessas regiões aumentou em 1,4 milhão em relação a 2019, o que representa um retrocesso de mais de uma década nos avanços na luta contra a tuberculose.\n\t Os autores do estudo alertam para a interrupção dos serviços de saúde e programas de combate à tuberculose durante a pandemia da COVID-19, o que contribuiu para o aumento dos casos. A interrupção do diagnóstico precoce e tratamento adequado pode levar a um agravamento da doença e a um aumento da transmissão. \n\t A tuberculose é uma doença infecciosa que afeta principalmente os pulmões e é causada pela bactéria Mycobacterium tuberculosis. É transmitida pelo ar, quando uma pessoa infectada tosse ou espirra. Os sintomas incluem tosse prolongada, febre, sudorese noturna e perda de peso. O tratamento da tuberculose é feito com antibióticos e pode durar de seis meses a dois anos, dependendo da forma da doença. \n\t A Organização Mundial da Saúde (OMS) estabeleceu uma meta de acabar com a epidemia de tuberculose até 2030, mas o aumento dos casos em países de baixa e média renda pode tornar essa meta difícil de alcançar. A OMS recomenda a melhoria dos serviços de saúde, o investimento em pesquisa e o fortalecimento dos programas de combate à tuberculose para reduzir a incidência da doença.',
  },
  {
    titulo: 'Campanha de prevenção a Tuberculose',
    data: '12/12/2012',
    img: 'https://cdn-icons-png.flaticon.com/512/5110/5110429.png',
    descricao: 'Novo estudo indica aumento nos casos de tuberculose em países de baixa e média renda.',
    textoCompleto: '\t Um novo estudo publicado na revista científica Lancet Global Health indica um aumento nos casos de tuberculose em países de baixa e média renda. \n\t A pesquisa apontou que, em 2020, o número de pessoas com a doença nessas regiões aumentou em 1,4 milhão em relação a 2019, o que representa um retrocesso de mais de uma década nos avanços na luta contra a tuberculose.\n\t Os autores do estudo alertam para a interrupção dos serviços de saúde e programas de combate à tuberculose durante a pandemia da COVID-19, o que contribuiu para o aumento dos casos. A interrupção do diagnóstico precoce e tratamento adequado pode levar a um agravamento da doença e a um aumento da transmissão. \n\t A tuberculose é uma doença infecciosa que afeta principalmente os pulmões e é causada pela bactéria Mycobacterium tuberculosis. É transmitida pelo ar, quando uma pessoa infectada tosse ou espirra. Os sintomas incluem tosse prolongada, febre, sudorese noturna e perda de peso. O tratamento da tuberculose é feito com antibióticos e pode durar de seis meses a dois anos, dependendo da forma da doença. \n\t A Organização Mundial da Saúde (OMS) estabeleceu uma meta de acabar com a epidemia de tuberculose até 2030, mas o aumento dos casos em países de baixa e média renda pode tornar essa meta difícil de alcançar. A OMS recomenda a melhoria dos serviços de saúde, o investimento em pesquisa e o fortalecimento dos programas de combate à tuberculose para reduzir a incidência da doença.',
  },
  {
    titulo: 'Campanha de prevenção a Tuberculose',
    data: '12/12/2012',
    img: 'https://cdn-icons-png.flaticon.com/512/5110/5110429.png',
    descricao: 'Novo estudo indica aumento nos casos de tuberculose em países de baixa e média renda.',
    textoCompleto: '\t Um novo estudo publicado na revista científica Lancet Global Health indica um aumento nos casos de tuberculose em países de baixa e média renda. \n\t A pesquisa apontou que, em 2020, o número de pessoas com a doença nessas regiões aumentou em 1,4 milhão em relação a 2019, o que representa um retrocesso de mais de uma década nos avanços na luta contra a tuberculose.\n\t Os autores do estudo alertam para a interrupção dos serviços de saúde e programas de combate à tuberculose durante a pandemia da COVID-19, o que contribuiu para o aumento dos casos. A interrupção do diagnóstico precoce e tratamento adequado pode levar a um agravamento da doença e a um aumento da transmissão. \n\t A tuberculose é uma doença infecciosa que afeta principalmente os pulmões e é causada pela bactéria Mycobacterium tuberculosis. É transmitida pelo ar, quando uma pessoa infectada tosse ou espirra. Os sintomas incluem tosse prolongada, febre, sudorese noturna e perda de peso. O tratamento da tuberculose é feito com antibióticos e pode durar de seis meses a dois anos, dependendo da forma da doença. \n\t A Organização Mundial da Saúde (OMS) estabeleceu uma meta de acabar com a epidemia de tuberculose até 2030, mas o aumento dos casos em países de baixa e média renda pode tornar essa meta difícil de alcançar. A OMS recomenda a melhoria dos serviços de saúde, o investimento em pesquisa e o fortalecimento dos programas de combate à tuberculose para reduzir a incidência da doença.',
  },
];

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      listaNoticias,
    };
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
