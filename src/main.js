import './assets/main.css'
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Usuarios from './components/Usuarios.vue'; // Asegúrate de que la ruta sea correcta
import Login from './components/Login.vue'
import Registro from './components/Registro.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: App }, // Ruta de inicio de sesión
    { path: '/usuarios', component: Usuarios },
    { path: '/login', component: Login},
    { path: '/registro', component: Registro},// Ruta de la página de usuarios
    // Ruta de la página de usuarios
    // Otras rutas aquí
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');


