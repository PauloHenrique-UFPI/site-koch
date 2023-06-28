<template>
  <div>
    <h1>Dados Complementares do Caso</h1>
    <h3>Número do Prontuário:</h3>
    <div>
      <input
        id="prontuario"
        type="text"
        v-model="numeroProntuario"
        maxlength="10"
      />
    </div>

    <h3>Tipo de Entrada:</h3>
    <div class="opcoes-tipo-entrada">
      <div v-for="(opcao, index) in opcoesTipoEntrada" :key="index">
        {{ index + 1 }}. {{ opcao }}
      </div>
    </div>

    <div class="selecao-entrada">
      <input
        id="numeroEntrada"
        type="text"
        v-model="numeroTipoEntrada"
        maxlength="1"
      />
    </div>

    <h3>Populações Especiais:</h3>
    <div class="opcoes-populacoes-especiais">
      <div v-for="(opcao, index) in opcoesPopulacoesEspeciais" :key="index">
        {{ index + 1 }}. {{ opcao }}
      </div>
    </div>

    <div class="selecao-populacoes-especiais">
      <label for="populacaoLiberdade">População Privada de Liberdade:</label>
      <input
        id="populacaoLiberdade"
        type="text"
        v-model="populacaoLiberdade"
        maxlength="1"
      />
    </div>
    <div class="selecao-populacoes-especiais">
      <label for="profissionalSaude">Profissional de Saúde:</label>
      <input
        id="profissionalSaude"
        type="text"
        v-model="profissionalSaude"
        maxlength="1"
      />
    </div>
    <div class="selecao-populacoes-especiais">
      <label for="populacaoRua">População Situada em Rua:</label>
      <input
        id="populacaoRua"
        type="text"
        v-model="populacaoRua"
        maxlength="1"
      />
    </div>
    <div class="selecao-populacoes-especiais">
      <label for="imigrante">Imigrante:</label>
      <input
        id="imigrante"
        type="text"
        v-model="imigrante"
        maxlength="1"
      />
    </div>

    <h3>Beneficiário do Programa de Transferência de Renda do Governo:</h3>
    <div class="opcoes-beneficiario">
      <div v-for="(opcao, index) in opcoesBeneficiario" :key="index">
        {{ index + 1 }}. {{ opcao }}
      </div>
    </div>

    <div class="selecao-beneficiario">
      <input
        id="beneficiarioNumero"
        type="text"
        v-model="beneficiarioNumero"
        maxlength="1"
      />
    </div>

    <h3>Forma:</h3>
    <div class="opcoes-forma">
      <div v-for="(opcao, index) in opcoesForma" :key="index">
        {{ index + 1 }}. {{ opcao }}
    </div>
    </div>

    <div class="selecao-forma">
      <input
        id="formaNumero"
        type="text"
        v-model="formaNumero"
        maxlength="1"
      />
    </div>

    <h3>Se Extrapulmonar:</h3>
    <div class="opcoes-extrapulmonar">
      <div v-for="(opcao, index) in opcoesExtrapulmonar" :key="index">
        {{ index + 1 }}. {{ opcao }}
      </div>
    </div>

    <div class="selecao-extrapulmonar">
      <input
        id="extrapulmonarNumero"
        type="text"
        v-model="extrapulmonarNumero"
        maxlength="1"
      />
    </div>

    <div v-if="extrapulmonarNumero === '10'" class="selecao-extrapulmonar-outra">
      <input
        id="extrapulmonarOutra"
        type="text"
        v-model="extrapulmonarOutra"
      />
    </div>

    <h3>Doenças e Agravos:</h3>
    <div class="opcoes-doenca">
      <div v-for="(opcao, index) in opcoesDoenca" :key="index">
        {{ index + 1 }}. {{ opcao }}
      </div>
    </div>

    <div class="selecao-doenca">
      <label for="doencaAids">AIDS:</label>
      <input
        id="doencaAids"
        type="text"
        v-model="doencaAids"
        maxlength="1"
      />
    </div>
    <div class="selecao-doenca">
      <label for="doencaAlcoolismo">Alcoolismo:</label>
      <input
        id="doencaAlcoolismo"
        type="text"
        v-model="doencaAlcoolismo"
        maxlength="1"
      />
    </div>
    <div class="selecao-doenca">
      <label for="doencaDiabetes">Diabetes:</label>
      <input
        id="doencaDiabetes"
        type="text"
        v-model="doencaDiabetes"
        maxlength="1"
      />
    </div>
    <div class="selecao-doenca">
      <label for="doencaDoencaMental">Doença Mental:</label>
      <input
        id="doencaDoencaMental"
        type="text"
        v-model="doencaDoencaMental"
        maxlength="1"
      />
    </div>
    <div class="selecao-doenca">
      <label for="doencaDrogasIlicitas">Uso de Drogas Ilícitas:</label>
      <input
        id="doencaDrogasIlicitas"
        type="text"
        v-model="doencaDrogasIlicitas"
        maxlength="1"
      />
    </div>
    <div class="selecao-doenca">
      <label for="doencaTabagismo">Tabagismo:</label>
      <input
        id="doencaTabagismo"
        type="text"
        v-model="doencaTabagismo"
        maxlength="1"
      />
    </div>
    <div class="selecao-doenca">
      <label for="doencaOutras">Outras:</label>
      <input
        id="doencaOutras"
        type="text"
        v-model="doencaOutras"
      />
    </div>

    <h3>Basilocopia de Escarro (Diagnóstico):</h3>
    <div class="opcoes-basilocopia">
      <div v-for="(opcao, index) in opcoesBasilocopia" :key="index">
        {{ index + 1 }}. {{ opcao }}
      </div>
    </div>

    <div class="selecao-basilocopia">
      <input
        id="basilocopia"
        type="text"
        v-model="basilocopia"
        maxlength="1"
      />
    </div>

    <h3>Radiografia do Tórax:</h3>
    <div class="opcoes-radiografia">
      <div v-for="(opcao, index) in opcoesRadiografia" :key="index">
        {{ index + 1 }}. {{ opcao }}
      </div>
    </div>

    <div class="selecao-radiografia">
      <input
        id="radiografia"
        type="text"
        v-model="radiografia"
        maxlength="1"
      />
    </div>
    <h3>HIV:</h3>
    <div class="opcoes-hiv">
      <div v-for="(opcao, index) in opcoesHIV" :key="index">
        {{ index + 1 }}. {{ opcao }}
      </div>
    </div>

    <div class="selecao-hiv">
      <input
        id="hivNumero"
        type="text"
        v-model="hivNumero"
        maxlength="1"
       />
    </div>

    <h3>Terapia Antirretroviral durante o Tratamento para a TB:</h3>
    <div class="opcoes-terapia">
     <div v-for="(opcao, index) in opcoesterapia" :key="index">
       {{ index + 1 }}. {{ opcao }}
      </div>
    </div>

    <div class="selecao-forma">
     <input
      id="formaNumero"
      type="text"
      v-model="formaNumero"
      maxlength="1"
      />
    </div>
    <h3>Histopatologia:</h3>
      <div class="opcoes-histopatologia">
      <div v-for="(opcao, index) in opcoesHistopatologia" :key="index">
       {{ index + 1 }}. {{ opcao }}
      </div>
    </div>

    <div class="selecao-histopatologia">
    <input
      id="histopatologiaNumero"
      type="text"
      v-model="histopatologiaNumero"
      maxlength="1"
      />
    </div>

   <h3>Cultura:</h3>
    <div class="opcoes-cultura">
    <div v-for="(opcao, index) in opcoesCultura" :key="index">
      {{ index + 1 }}. {{ opcao }}
    </div>
  </div>

  <div class="selecao-cultura">
  <input
    id="culturaNumero"
    type="text"
    v-model="culturaNumero"
    maxlength="1"
    />
  </div>
  <h3>Teste Molecular Rápido para TB (TMR-TB):</h3>
  <div class="opcoes-tmrtb">
  <div v-for="(opcao, index) in opcoesTMRTB" :key="index">
    {{ index + 1 }}. {{ opcao }}
    </div>
  </div>

  <div class="selecao-tmrtb">
  <input
    id="tmrtbNumero"
    type="text"
    v-model="tmrtbNumero"
    maxlength="1"
    />
  </div>
  <h3>Teste de Sensibilidade:</h3>
  <div class="opcoes-sensibilidade">
  <div v-for="(opcao, index) in opcoesSensibilidade" :key="index">
    {{ index + 1 }}. {{ opcao }}
    </div>
  </div>

  <div class="selecao-sensibilidade">
  <input
    id="sensibilidadeNumero"
    type="text"
    v-model="sensibilidadeNumero"
    maxlength="1"
    />
  </div>

  <h3>Data de Início do Tratamento Atual:</h3>
  <div class="opcoes-data-tratamento">
  <div v-for="(opcao, index) in opcoesDataTratamento" :key="index">
    {{ index + 1 }}. {{ opcao }}
    </div>
  </div>

  <div class="selecao-data-tratamento">
  <input
    id="dataTratamento"
    type="text"
    v-model="dataTratamento"
    maxlength="10"
    />
  </div>

  <h3>Total de Contatos Identificados:</h3>
  <div class="opcoes-contatos">
  <div v-for="(opcao, index) in opcoesContatos" :key="index">
    {{ index + 1 }}. {{ opcao }}
    </div>
  </div>

  <div class="selecao-contatos">
  <input
    id="contatosIdentificados"
    type="text"
    v-model="contatosIdentificados"
    maxlength="4"
    />
  </div>

  <h3>Município/Unidade de Saúde:</h3>
  <div class="opcoes-municipio">
  <div v-for="(opcao, index) in opcoesMunicipio" :key="index">
    {{ index + 1 }}. {{ opcao }}
    </div>
  </div>
  <div class="selecao-municipio">
  <input
    id="municipio"
    type="text"
    v-model="municipio"
    />
  </div>

  <h3>Código da Unidade de Saúde:</h3>
  <div class="opcoes-codigo-unidade">
  <div v-for="(opcao, index) in opcoesCodigoUnidade" :key="index">
      {{ index + 1 }}. {{ opcao }}
    </div>
  </div>
  <div class="selecao-codigo-unidade">
  <input
    id="codigoUnidade"
    type="text"
    v-model="codigoUnidade"
    maxlength="8"
    />
  </div>
  <h3>Inserir Nome:</h3>
  <div class="selecao-nome-unidade">
  <input
    id="nomeUnidade"
    type="text"
    v-model="nomeUnidade"
    />
  </div>

  <h3>Função:</h3>
  <div class="selecao-função-unidade">
  <input
    id="função"
    type="text"
    v-model="função"
    />
  </div>
  <h3>Assinatura:</h3>
  <div class="selecao-assinatura-unidade">
  <input
    id="assinatura"
    type="text"
    v-model="assinatura"
    />
  </div>

 </div>
</template>
<script>
export default {
  data() {
    return {
      numeroProntuario: '',
      numeroTipoEntrada: '',
      opcoesTipoEntrada: [
        'Caso Novo',
        'Reciditiva',
        'Reingresso após abandono',
        'Não Sabe',
        'Transferência',
        'Pós-Óbito',
      ],
      opcoesPopulacoesEspeciais: [
        'Sim',
        'Não',
        'Ignorado',
      ],
      populacaoLiberdade: '',
      profissionalSaude: '',
      populacaoRua: '',
      imigrante: '',
      opcoesBeneficiario: [
        'Sim',
        'Não',
        'Ignorado',
      ],
      beneficiarioNumero: '',
      opcoesExtrapulmonar: [
        'Pleural',
        'Ganglionar Periférico',
        'Geniturinário',
        'Osteoarticular',
        'Miliar',
        'Outro',
      ],

      opcoesForma: [
        'Pulmonar',
        'ExtraPulmonar',
        'Pulmonar + Extrapulmonar',
      ],
      formaNumero: '',

      extrapulmonarNumero: '',

      opcoesDoenca: [
        'Sim',
        'Não',
        'Ignorado',
      ],
      doencaAids: '',
      doencaAlcoolismo: '',
      doencaDiabetes: '',
      doencaDoencaMental: '',
      doencaDrogasIlicitas: '',
      doencaTabagismo: '',
      doencaOutras: '',

      opcoesBasilocopia: [
        'Positiva',
        'Negativa',
        'Não Realizada',
      ],
      basilocopia: '',
      opcoesRadiografia: [
        'Positiva',
        'Negativa',
        'Não Realizada',
      ],
      radiografia: '',

      opcoesHIV: [
        'Positivo',
        'Negativo',
        'Em andamento',
        'Não realizado',
      ],
      hivNumero: '',

      opcoesterapia: [
        'Sim',
        'Não',
        'Ignorado',
      ],
      terapia: '',

      opcoesHistopatologia: [
        'Baar Positivo',
        'Sugestivo de TB',
        'Não Sugestivo de TB',
        'Em andamento',
        'Não realizado',
      ],
      histopatologiaNumero: '',

      opcoesCultura: [
        'Positivo',
        'Negativo',
        'Em andamento',
        'Não realizado',
      ],
      culturaNumero: '',

      opcoesTMRTB: [
        'Detectável sensível à Rifampicina',
        'Detectável Resistente à Rifampicina',
        'Não Detectável',
        'Inconclusivo',
        'Não realizado',
      ],
      tmrtbNumero: '',

      opcoesSensibilidade: [
        'Resistente somente à Isoniazida',
        'Resistente somente à Rifampicina',
        'Resistente somente à Isonizaida e Rifampicina',
        'Resistente a outras drogas de 1 linha',
        'Sensível',
        'Em andamento',
        'Não realizado',
      ],
      sensibilidadeNumero: '',
    };
  },
};
</script>
<style>
  /* Estilo geral */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    background-color: #f5f5f5;
    padding: 20px;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  input[type="text"] {
    width: 10%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    font-size: 14px;
  }

  /* Estilo das caixas de seleção */
  .checkbox-container {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  /* Estilos das opções */
  .opcoes-tipo-entrada,
  .opcoes-populacoes-especiais,
  .opcoes-beneficiario,
  .opcoes-forma,
  .opcoes-extrapulmonar,
  .opcoes-doenca,
  .opcoes-basilocopia,
  .opcoes-radiografia,
  .opcoes-hiv,
  .opcoes-terapia,
  .opcoes-histopatologia,
  .opcoes-cultura,
  .opcoes-tmrtb,
  .opcoes-sensibilidade,
  .opcoes-data-tratamento,
  .opcoes-contatos,
  .opcoes-municipio,
  .opcoes-codigo-unidade {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    align-items: flex-start;
  }

  .opcoes-tipo-entrada > div,
  .opcoes-populacoes-especiais > div,
  .opcoes-beneficiario > div,
  .opcoes-forma > div,
  .opcoes-extrapulmonar > div,
  .opcoes-doenca > div,
  .opcoes-basilocopia > div,
  .opcoes-radiografia > div,
  .opcoes-hiv > div,
  .opcoes-terapia > div,
  .opcoes-histopatologia > div,
  .opcoes-cultura > div,
  .opcoes-tmrtb > div,
  .opcoes-sensibilidade > div,
  .opcoes-data-tratamento > div,
  .opcoes-contatos > div,
  .opcoes-municipio > div,
  .opcoes-codigo-unidade > div {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }

</style>
