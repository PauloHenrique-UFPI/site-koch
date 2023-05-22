<template>
  <q-page class="page_noticias flex justify-center">
    <div class="pagina_noticia-List__lits " >
      <div class="text-h1 q-py-lg">Noticias</div>
      <div class="noticias">
        <div v-for="(post, index) in listaNoticias" :key="index" style="flex-direction: column;">
          <q-card class="card">
            post
          </q-card>
        </div>
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
.page_noticias {

  &__list{
    width: 80%;
  }
}
.baixo{
  position: relative;
  top: 100px;
  width: 100%;
}
.add{
  position: fixed;

  left:85%;
  top: 85%;
  z-index: 2;

}
</style>
