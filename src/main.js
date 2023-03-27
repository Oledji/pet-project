import { createApp } from 'vue'
import Vuex from 'vuex'
import store from './store' 
import App from './App.vue'
import router from './router'    
import './css/grid.css'
import './css/style.css'
import './css/font.css'
import './css/variables.css'
import './css/normalize.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass, faBars, faImages, faChartLine, faBookmark, faXmark, faHeart, faUser, faDownload, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Paginate from "vuejs-paginate-next";



library.add(faMagnifyingGlass, faBars, faImages, faChartLine, faBookmark, faXmark, faHeart, faUser, faDownload, faChevronRight, faChevronLeft)

createApp(App).use(Vuex).use(store).use(router).component('paginate', Paginate).component('font-awesome-icon', FontAwesomeIcon).mount('#app')