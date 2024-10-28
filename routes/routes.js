import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../components/Inicio.vue'; 
import Agregar from '../components/Agregar.vue'; 
import Editar from '../components/Editar.vue'; 

const routes = [
  { path: '/', component: Inicio, name: 'Inicio' },
  { path: '/agregar', component: Agregar, name: 'Agregar' },
  { path: '/editar/:id', component: Editar, name: 'Editar' } 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;