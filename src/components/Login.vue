<template>
    <div>
      <h1>Inicio de Sesión</h1>
      <input v-model="email" placeholder="Correo electrónico" />
      <input v-model="password" type="password" placeholder="Contraseña" />
      <button @click="login">Iniciar Sesión</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  
  const login = () => {
    // Verifica si las credenciales coinciden con la cuenta principal o predefinida
    if (email.value === 'usuario@gmail.com' && password.value === 'secreto') {
      // Redirige al usuario a la página de usuarios
      router.push('/usuarios');
    } else {
        alert('email= usuario@gmail.com y contraseña= secreto')
      alert('Credenciales incorrectas');
    }
  };
  </script>
  