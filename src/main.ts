import '@/style/index.scss'
import { VueQueryPlugin } from '@tanstack/vue-query'
import 'virtual:uno.css'
import { createSSRApp } from 'vue'

import App from './App.vue'
// import { prototypeInterceptor, requestInterceptor, routeInterceptor } from './interceptors'
import { prototypeInterceptor, requestInterceptor, } from './interceptors'

import router, { routeInterceptor } from './router';
import store from './store'

export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  // app.use(routeInterceptor)
  app.use(routeInterceptor);
  app.use(router);

  app.use(requestInterceptor)
  app.use(prototypeInterceptor)
  app.use(VueQueryPlugin)

  return {
    app,
  }
}
