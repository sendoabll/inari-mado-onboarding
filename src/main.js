import { createApp } from 'vue'
import App from '@/App.vue'
import { router } from '@/modules/router/index.js'

import 'vue-material-design-icons/styles.css';
import './style.css'

import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/dark.css'

const app = createApp(App)

app.use(router)
app.use(VueHighlightJS)

app.mount('#app')
