<template>
  <div class="page-paciente">
    <div class="news-page" v-if="pacienteChave">
      <h1 class="title">Ficha Médica</h1>

      <div class="patient-info">
        <div v-if="pacienteChave.nome" class="info-item info-item-rectangle">
          <strong>Nome do Paciente:</strong> {{ pacienteChave.nome }}
        </div>
        <div v-if="pacienteChave.data_nasc" class="info-item info-item-rectangle">
          <strong>Data de Nascimento:</strong> {{ pacienteChave.data_nasc }}
        </div>
        <div v-if="pacienteChave.nome_mae" class="info-item info-item-rectangle">
          <strong>Nome da Mãe:</strong> {{ pacienteChave.nome_mae }}
        </div>
        <div v-if="pacienteChave.telefone" class="info-item info-item-rectangle">
          <strong>Telefone:</strong> {{ pacienteChave.telefone }}
        </div>
        <div v-if="pacienteChave.endereco" class="info-item info-item-rectangle">
          <strong>Endereço:</strong> {{ pacienteChave.endereco }}
        </div>
        <div class="info-item">
          <strong>Exemplo de Exame:</strong>
          <img :src="pacienteChave.img_trat" alt="Exemplo de Exame" class="exam-image">
        </div>
      </div>
      <h3></h3>

      <h3>Histórico Médico</h3>
      <ul class="medical-history">
        <li v-for="registro in paciente.medicalHistory" :key="registro.id">
          <div class="registro-item">
            <div class="registro-date">
              <strong>{{ formatDate(registro.date) }}</strong>
            </div>
            <div class="registro-description">
              {{ registro.description }}
            </div>
            <template v-if="registro.tuberculosisTreatment">
              <div class="registro-treatment">
                <div><strong>Medicação:</strong>
                  {{ registro.tuberculosisTreatment.medication }}</div>
                <div><strong>Duração:</strong> {{ registro.tuberculosisTreatment.duration }}</div>
                <div><strong>Observações:</strong>
                  {{ registro.tuberculosisTreatment.observations }}</div>
                <div class="prescricoes">
                  <strong>Prescrições:</strong>
                  <ul>
                    <li v-for="prescricao in
                    registro.tuberculosisTreatment.prescricoes" :key="prescricao.id">
                      {{ prescricao.nome }} - {{ prescricao.dosagem }}
                    </li>
                  </ul>
                </div>
              </div>
            </template>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { api } from 'boot/axios';

export default {
  name: 'PacientePage',
  data() {
    return {
      pacienteChave: null,
      paciente: {
        patientName: 'Sebastião',
        birthdate: '',
        motherName: 'Maria Silva',
        phone: '555-123-4567',
        address: 'Rua Principal, 123, Cidade',

        medicalHistory: [
          {
            id: 1,
            date: '2022-01-15',
            description: 'Consulta de rotina',
            tuberculosisTreatment: null,
          },
          {
            id: 2,
            date: '2022-03-10',
            description: 'Prescrição Médica',
            tuberculosisTreatment: {
              medication: 'Isoniazida',
              duration: '6 meses',
              observations: 'Acompanhamento mensal',
              prescricoes: [
                { id: 1, nome: 'Medicamento A', dosagem: '2 comprimidos ao dia' },
                { id: 2, nome: 'Medicamento B', dosagem: '1 comprimido ao dia' },
              ],
            },
          },
          {
            id: 3,
            date: '2022-05-20',
            description: 'Acompanhamento pós-tratamento',
            tuberculosisTreatment: {
              medication: 'Completo',
              duration: '12 meses',
              observations: 'Exame de sangue a cada 3 meses',
              prescricoes: [
                { id: 3, nome: 'Medicamento C', dosagem: '1 comprimido ao dia' },
                { id: 4, nome: 'Medicamento D', dosagem: '2 comprimidos ao dia' },
                { id: 5, nome: 'Medicamento E', dosagem: '1 comprimido a cada 12 horas' },
              ],
            },
          },
          {
            id: 4,
            date: '2022-07-08',
            description: 'Consulta de acompanhamento',
            tuberculosisTreatment: null,
          },
          {
            id: 5,
            date: '2022-09-25',
            description: 'Exames laboratoriais',
            tuberculosisTreatment: {
              medication: 'Isoniazida',
              duration: '6 meses',
              observations: 'Acompanhamento mensal',
              prescricoes: [
                { id: 6, nome: 'Medicamento F', dosagem: '2 comprimidos ao dia' },
                { id: 7, nome: 'Medicamento G', dosagem: '1 comprimido ao dia' },
              ],
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.carregaPaciente(this.$route.params.id);
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('pt-BR', options);
    },
    async carregaPaciente(id) {
      const token = localStorage.getItem('token');
      const url = `https://api-koch.onrender.com/paciente/${id}`;
      try {
        const response = await api.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.pacienteChave = response.data;
        console.log(this.pacienteChave);
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.page-paciente {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.title {
  font-size: 54px;
  margin-bottom: 20px;
}

.patient-info {
  border: 1px solid #ccc;
  padding: 10px;
}

.info-item {
  margin-bottom: 10px;
}

.info-item-rectangle {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}

.exam-image {
  max-width: 100%;
  margin-bottom: 10px;
}

.medical-history {
  list-style: none;
  padding: 0;
  margin: 0;
}

.medical-history li {
  margin-bottom: 10px;
}

.registro-item {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}

.registro-date {
  margin-bottom: 5px;
}

.registro-description {
  margin-bottom: 10px;
}

.registro-treatment {
  margin-bottom: 10px;
}

.prescricoes {
  margin-top: 10px;
}
</style>
