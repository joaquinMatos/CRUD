<template>
  <div id="app">
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
      <Menu v-if-else="isLoggedIn" /> 
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Menu from './components/Menu.vue'

const isLoggedIn = ref(false) 


</script>
