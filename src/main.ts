//vue3框架提供的方法createApp方法,可以用来创建应用实例方法
import { createApp } from 'vue'
//引入清楚默认样式
import '@/style/reset.scss'

// 引入elementPlus
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'

//引入国际化
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 引入icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//引入根组件App
//利用createApp方法创建应用实例,且将应用实例挂载到挂载点上
import App from './App.vue'

import HospitalTop from "@/components/hospital_top/index.vue";
import HospitalBottom from "@/components/hospital_bottom/index.vue";

//引入vue-router
import router from "@/router";

const app = createApp(App)

app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)

//安装element-plus插件
//安装中文
app.use(ElementPlus, {
    locale: zhCn,
})

//安装router
app.use(router)



//安装icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
