import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/saga-blue/theme.css'      //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css' //icons

import Button from 'primevue/button'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const app = createApp(App); // Create App

app.use(router)
app.use(PrimeVue); // Install PrimeVue

app.component('Button', Button); // Component Button
app.component('DataTable', DataTable); // Component Table
app.component('Column', Column); // Component Column in Table

app.mount('#app')
