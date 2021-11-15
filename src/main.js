/*!

 =========================================================
 * Foodie.ng - v1.0.0
 =========================================================

 * Product Page: github
 * Copyright 2021 @Protek (http://www.Protek.com)
 * Licensed under MIT (https://github.com/frank1003A/)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial tportions of he Software.

 */

import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//css
import '@/assets/scss/main.scss'

createApp(App).use(store).use(router).mount('#app')
