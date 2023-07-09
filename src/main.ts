import './assets/main.css'
import '../node_modules/primeflex/primeflex.css'
import '../node_modules/primevue/resources/themes/viva-dark/theme.css';
import '../node_modules/primevue/resources/primevue.min.css';
import '../node_modules/primeicons/primeicons.css';

import { createApp } from 'vue'
import Menubar from '../node_modules/primevue/menubar'
import Button from '../node_modules/primevue/button'
import Rating from '../node_modules/primevue/rating'
import InputText from '../node_modules/primevue/inputtext'
import InputSwitch from '../node_modules/primevue/inputswitch'
import PrimeVue from "primevue/config"
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(PrimeVue)
app.component('Menubar', Menubar)
app.component('Button', Button)
app.component('Rating', Rating)
app.component('InputText', InputText)
app.component('InputSwitch', InputSwitch)
app.mount('#app')
