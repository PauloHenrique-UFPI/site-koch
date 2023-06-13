<template>
  <q-page class="page flex justify-center">
    <div class="q-pa-md" style="width: 30%;">
      <q-card class="my-card">
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
            <h2 style="text-align: center;">Login</h2>
            <q-input rounded outlined v-model="username" label="E-mail" />
            <q-input rounded outlined v-model="password" type="password" label="Senha" />
            <div class="card">
              <q-btn
                unelevated
                rounded
                @click="submitForm"
                color="red"
                icon="send"
                label="Enviar"
                :class="{ 'loading': loading }"
              />
            </div>

        </q-form>
      </q-card>
    </div>
  </q-page>
</template>
<script>
import { api } from 'boot/axios';

export default {
  name: 'pagina-login',
  data() {
    return {
      username: '',
      password: '',
      loading: false,
    };
  },
  methods: {
    async submitForm(event) {
      event.preventDefault();

      try {
        this.loading = true;
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
        this.loading = false; // Desativar a animação de carregamento
      }
    },
  },
};
</script>
<style scoped>
.my-card{
  top: 10%;
  padding: 10%;
  width: 100%;

}
.card{
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading .q-btn-inner {
  animation: spin 1s linear infinite;
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
