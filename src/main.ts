import { createApp } from 'vue'
import App from '@/App.vue'
import elementPlus from './plugins/element-plus'
import { createPinia } from 'pinia'
import router from '@/router'
import '@/styles/index.scss' // 加载全局样式

const app = createApp(App)

app.use(createPinia())
app.use(elementPlus)
app.use(router)
app.mount('#app')
