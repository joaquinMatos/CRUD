<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo electrónico</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                        <button @click="editUser(user.id)" class="btn btn-primary">Editar</button>
                        <button @click="deleteUser(user.id)" class="btn btn-danger">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Formulario para agregar nuevos usuarios -->
        <div class="form-group">
            <input v-model="newUserName" placeholder="Nombre" class="form-control">
            <input v-model="newUserEmail" placeholder="Correo electrónico" class="form-control">
            <button @click="addNewUser" class="btn btn-success">Agregar Usuario</button>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const users = ref([
    { id: 1, name: 'Usuario 1', email: 'usuario1@example.com' },
    { id: 2, name: 'Usuario 2', email: 'usuario2@example.com' },

]);

let newUserName = '';
let newUserEmail = '';

function addNewUser() {
    const newUser = {
        id: users.value.length + 1, // Genera un nuevo ID único
        name: newUserName,
        email: newUserEmail,
    };
    users.value.push(newUser); 
    newUserName = '';
    newUserEmail = '';
}

function editUser(userId) {
   
    const usuario = users.value.find((u) => u.id === userId);

    if (usuario) {
   
        usuario.name = 'NuevoNombre';
        usuario.email = 'nuevoemail@example.com';

        console.log('Usuario editado correctamente:', usuario);
    } else {
        console.log('El usuario con ID', userId, 'no existe.');
    }
}

editUser(users.value); 


function deleteUser(userId) {
    const userIndex = users.value.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        users.value.splice(userIndex, 1);
    }
}
</script>
  
<style scoped>
/* Estilos para la tabla */
.table {
    width: 100%;
    border-collapse: collapse;
}

.table th,
.table td {
    padding: 10px;
    border: 1px solid #ccc;
}

.btn {
    margin-right: 5px;
}
</style>
  