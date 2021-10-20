import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/*
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch() // This will kick of the initial replacement of i to svg tags and configure a MutationObserver
library.add(faUserSecret)

//Vue.component('font-awesome-icon', FontAwesomeIcon)
*/


//css
import '@/assets/scss/main.scss'

createApp(App)
.use(store)
.use(router)
.mount('#app')
