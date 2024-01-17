import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";
import './assets/bootstrap_yeti.css'

createApp(App)
    .use(router)
    .mount("#app");

/*import Vue from 'vue'
import App from './App.vue'
import router from './routers'

//import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')*/
