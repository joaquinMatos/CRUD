<template>
    <nav>
      <ul>
        <li><router-link to="/usuarios">Usuarios</router-link></li>
        <li><router-link to="/perfil">Mi Perfil</router-link></li>
        <!-- Agrega más enlaces específicos para usuarios aquí -->
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  // Puedes importar otros componentes o lógica aquí si es necesario
  </script>
  
  <style scoped>
  /* Estilos para el menú de usuarios */
  nav {
    background-color: #555;
    color: #fff;
  }
  
  ul {
    list-style: none;
    padding: 0;
    display: flex;
  }
  
  li {
    margin-right: 1rem;
  }
  
  a {
    text-decoration: none;
    color: #fff;
  }
  </style>
  