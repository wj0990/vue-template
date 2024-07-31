import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css' // 全局导入样式
import App from './App.vue'
import router from './router'
import config from './config'

const app = createApp(App)
// 设置中文语言环境
const elConfig = {
  locale: zhCn
}
app.config.globalProperties.$CONFIG = config
// app.config.compilerOptions.comments = true // 设置生产保留注释

app.use(createPinia())
app.use(ElementPlus, elConfig)
app.use(router)

app.mount('#app')
