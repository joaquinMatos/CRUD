<template>
    <nav>
      <ul>
        <li><router-link to="/login">Inicio de sesión</router-link></li>
        <li><router-link to="/registro">Registro</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  
  import { defineProps } from 'vue'
  // Puedes importar otros componentes o lógica aquí si es necesario
  </script>
  
  <style scoped>
  /* Estilos para el menú */
  nav {
    background-color: #333;
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
  