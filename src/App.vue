<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
  <header><h1><RouterLink to="/">TeoMatt</RouterLink></h1></header>
  <main>
    <RouterView/>
  </main>
  <footer>
    <div>
          <i class="fa-brands fa-github"></i><a href="https://github.com/TeoMattLam">TeoMattLam</a><br>
          <i class="fa-brands fa-instagram"></i><a href="https://www.instagram.com/teomattlam/">TeoMatt</a><br>
      </div>
  </footer>
</template>
