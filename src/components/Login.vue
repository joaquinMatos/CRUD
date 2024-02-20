<template>
  <div>
    <h1>Inicio de Sesión</h1>
    <input v-model="loginEmail" placeholder="Correo electrónico" />
    <input v-model="loginPassword" type="password" placeholder="Contraseña" />
    <button @click="login">Iniciar Sesión</button>
  </div>

  <div>
    <!-- Mostrar los datos recibidos -->
    <p>Nombre: {{ userData.name }}</p>
    <p>Correo electrónico: {{ userData.email }}</p>
    <p>Contraseña: {{ userData.password }}</p>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { useRouter } from 'vue-router';

// Definir las props que esperamos recibir
const props = defineProps({
  userData: Object,
});

const loginEmail = ref('');
const loginPassword = ref('');
const router = useRouter();

const login = () => {
  if (loginEmail.value === 'usuario@gmail.com' && loginPassword.value === 'secreto') {
    router.push('/usuarios');
  } else {
    alert('Credenciales incorrectas');
  }
};
</script>
