// main.js o main.ts

import { createApp } from 'vue';
import App from './App.vue';

// Importar Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Importar los iconos que necesitas
import { fas } from '@fortawesome/free-solid-svg-icons';  // fas es el pack de iconos sólidos

// Añadir los iconos a la biblioteca
library.add(fas);

// Crear la aplicación Vue
const app = createApp(App);

// Registrar el componente globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

// Montar la aplicación
app.mount('#app');
