import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapJs from '../node_modules/bootstrap/dist/js/bootstrap.js'

export default {
    BootstrapJs
}

createApp(App).use(router).mount('#app')
