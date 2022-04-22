import Vue from 'vue'
import App from './App.vue'
import raven from '@raven/cell'
import '@raven/theme/lib/cell/index.css'

Vue.use(raven)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
