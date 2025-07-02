// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'  // <- ✅ correct path
import router from './router'

createApp(App)
  .use(store)               // ✅ register store
  .use(router)
  .mount('#app')
