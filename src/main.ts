import 'reflect-metadata'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Tooltip from 'primevue/tooltip';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';
import ConfirmationService from 'primevue/confirmationservice';
// import './style.css'
import App from './App.vue'
import router from './router/index';

import './assets/layout/index.scss';
import './assets/main.css';

import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/fluent-light/theme.css'
import 'primeflex/primeflex.css'


const app = createApp(App)
app.use(PrimeVue, { ripple: true });
app.use(ConfirmationService);
app.directive('tooltip', Tooltip);
app.directive('ripple', Ripple)
app.directive('styleclass', StyleClass)
app.use(createPinia())
app.use(router)

app.mount('#app')
