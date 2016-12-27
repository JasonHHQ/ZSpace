import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import routes from './routes'

Vue.use(ElementUI)

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  },
  config:{
    keyCodes:{
      v: 86,
      f2: 113
    }
  }
})



window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
