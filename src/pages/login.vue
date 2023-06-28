<template>
  <q-page class="page flex justify-center">
    <div class="q-pa-md" style="min-width: 35%;">
      <q-card class="my-card">
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
          <h2 style="text-align: center;">Login</h2>
          <q-input rounded outlined v-model="username" label="E-mail" />
          <q-input rounded outlined v-model="password" @keyup.enter="submitForm"
          type="password" label="Senha" />
          <div class="card">
            <q-btn
              unelevated
              rounded
              @click="submitForm"
              color="red"
              icon="send"
              label="Enviar"
              v-show="showButton"
            />
            <q-spinner
              :size="80"
              :color="loading ? 'red' : 'transparent'"
              v-show="!showButton"
            />
          </div>
        </q-form>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { api } from 'boot/axios';
import { QSpinner } from 'quasar';

export default {
  name: 'login_',
  components: {
    QSpinner,
  },
  data() {
    return {
      username: '',
      password: '',
      loading: false,
      showButton: true,
    };
  },
  methods: {
    async submitForm(event) {
      event.preventDefault();

      try {
        this.loading = true;
        this.showButton = false;

        const payload = {
          email: this.username,
          password: this.password,
        };

        const response = await api.post('https://api-koch.onrender.com/login', payload);
        const { token } = response.data;
        console.log(payload);
        localStorage.setItem('token', token);

        this.$router.push('/home');
      } catch (error) {
        console.log(error);
        alert(error.request.response);
      } finally {
        this.loading = false;
        this.showButton = true;
      }
    },
  },
};
</script>

<style scoped>
.my-card {
  top: 10%;
  padding: 10%;
  width: 100%;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
