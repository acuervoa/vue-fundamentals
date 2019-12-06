import Vue from 'vue';
import Vuex from 'vuex';

import robotsModule from './modules/robots';
import usersModule from './modules/users';
import pinDirective from '../shared/pin-directive';

Vue.use(Vuex);
Vue.directive('pin', pinDirective);

export default new Vuex.Store({
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
});
