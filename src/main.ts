import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/saga-blue/theme.css'      //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css' //icons

import Button from 'primevue/button'

const app = createApp(App); // Create App

app.use(router)
app.use(PrimeVue); // Install PrimeVue

app.component('Button', Button); // Component Button

app.mount('#app')
