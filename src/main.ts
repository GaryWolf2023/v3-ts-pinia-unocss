import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import '~/styles/index.scss'

// import 'element-plus/theme-chalk/dark/css-vars.css'
// import './styles/dark/css-vars.scss'
// import './styles/element/index.scss'

import SvgIcon from './components/SvgIcon/index.vue'
import 'virtual:svg-icons-register'

import 'uno.css'

const app = createApp(App)

app.component('svg-icon', SvgIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
