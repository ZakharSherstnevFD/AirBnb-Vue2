import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

import header from './header'
import explore from './explore'
export default new Vuex.Store ({
    modules: {
      header,
      explore
    }
})
