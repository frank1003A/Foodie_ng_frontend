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
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/**vue toasitification plugin */
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const options = {
  timeout: 2000
}

/**font-awesome initialization */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

/**add font awesome */
library.add(fas, far);

//css
import "@/assets/scss/main.scss";

createApp(App)
.use(Toast, options)
  .component("fa", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
