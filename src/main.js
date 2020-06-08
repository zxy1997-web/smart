import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vcharts from 'v-charts' // 引入可视化图库
import VeLine from 'v-charts/lib/line.common'
import VeHistogram from 'v-charts/lib/histogram.common'
import VeRing from 'v-charts/lib/ring.common'
import ElementUI from 'element-ui' // 引入组件库
import 'element-ui/lib/theme-chalk/index.css' // 引入样式

Vue.component(VeLine.name, VeLine)
    .component(VeHistogram.name, VeHistogram)
    .component(VeRing.name, VeRing)

Vue.use(ElementUI) //全局注册
Vue.use(Vcharts) // 全局注册
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')