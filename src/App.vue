<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
  <header><h1><RouterLink to="/">TeoMatt</RouterLink></h1></header>
  <main>
    <p>
      14 years old italian developer.
    </p>
    <RouterView/>
  </main>
  <footer>
    <div>
          <i class="fa-brands fa-github"></i><a href="https://github.com/TeoMattLam">TeoMattLam</a><br>
          <i class="fa-brands fa-instagram"></i><a href="https://www.instagram.com/teomattlam/">TeoMatt</a><br>
      </div>
  </footer>
</template>

<style scoped>
  p {
    text-align: center;
  }
</style>