<template>
    <div>
      <h1>Registro de Usuarios</h1>
      <input v-model="name" placeholder="Nombre" />
      <input v-model="email" placeholder="Correo electrónico" />
      <input v-model="password" type="password" placeholder="Contraseña" />
      <button @click="register">Registrar</button>
  
      <!-- Componente hijo -->
      <ChildComponent :userData="newUser" />
    </div>
  </template>
  
  <script setup>
  
  import ChildComponent from './Login.vue';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const name = ref('');
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  
  const newUser = {
    name: name.value,
    email: email.value,
    password: password.value,
  };
  
  const register = () => {
    alert(`Usuario registrado:\nNombre: ${newUser.name}\nCorreo electrónico: ${newUser.email}`);
    router.push('/login');
  };
  </script>
  