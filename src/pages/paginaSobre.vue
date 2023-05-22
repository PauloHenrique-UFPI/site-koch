<!-- eslint-disable max-len -->
<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      control-color="primary"
      class="rounded-borders"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-icon name="style" color="primary" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="live_tv" color="primary" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="layers" color="primary" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">

        <div class="q-mt-md text-center">
          <div class="card-wrapper">
            <div class="card">
              <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                  <img src="../assets/paulo.jpg" alt="" class="card-img">
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">Paulo Henrique</h2>
                <p class="descripiton">Estudante Universitario do curso de Sistema de Informação</p>
              </div>
            </div>
            <div class="card">
              <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                  <img src="https://cdn-icons-png.flaticon.com/512/5110/5110429.png" alt="" class="card-img">
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">Marcos Dalessandro</h2>
                <p class="descripiton">Estudante Universitario do curso de Sistema de Informação</p>
              </div>
            </div>
            <div class="card">
              <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                  <img src="https://cdn-icons-png.flaticon.com/512/5110/5110429.png" alt="" class="card-img">
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">Pedro Tercio</h2>
                <p class="descripiton">Estudante Universitario do curso de Sistema de Informação</p>
              </div>
            </div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <div class="row justify-center">
      <q-btn-toggle
        glossy
        v-model="slide"
        :options="[
          { label: 1, value: 'style' },
          { label: 2, value: 'tv' },
          { label: 3, value: 'layers' },
          { label: 4, value: 'map' }
        ]"
      />
    </div>
  </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'paginaSobre',
  setup() {
    return {
      slide: ref('style'),
      lorem: 'Segue os passos de uso do app, passo "X"',
    };
  },
});

</script>
<style>

.card{

  display: flex;
  align-items: center;
  justify-content: center;
}
.card-content{
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 10px 14px;
}
.card-image{
  position: relative;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background: #fff;
  padding: 3px;
}

.card-image .card-img{
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid rgb(222, 25, 25);
}
.name{
  font-size: 18px;
  font-weight: 500;
  color: #333;
}
</style>
