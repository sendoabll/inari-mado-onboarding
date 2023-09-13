import { createApp } from 'vue'
import App from '@/App.vue'
import { router } from '@/modules/router/index.js'

import 'vue-material-design-icons/styles.css';
import './style.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
