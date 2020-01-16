<template>
  <div id="cover">
    <div class="container">
      <div class="row justify-content-center">
        <button class="btn-lg btn-warning mid" @click.prevent="page = 'quiz'" v-if="page === 'login'">Start being superhero</button>
        <div class="miniquiz">
          <miniquiz :page='page' :pageNumber='pageNumber'></miniquiz>
          <button class="btn-lg btn-warning mt-3" @click.prevent="pageNumber++" v-if="page === 'quiz' && pageNumber <= 4">Next</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import miniquiz from './components/mini_quiz.vue';

export default {
  data() {
    return {
      page: 'login',
      pageNumber: 0
    }
  },
  components: {
    miniquiz
  }
}
</script>
<style lang="css" scoped>
  #cover {
    /* background-image: url('https://wallpaperaccess.com/full/44846.jpg'); */
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://wallpaperaccess.com/full/44846.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
  }
  .mid {
    margin-top: 20rem;
  }
  .miniquiz {
    margin-top: 10rem;
  }
</style>