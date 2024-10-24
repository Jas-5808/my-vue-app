import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './Router';
import axios from 'axios';


const app = createApp(App);
app.use(router); // Подключи маршрутизатор
app.mount('#app');