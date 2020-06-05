import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);

import * as actions from './actions';
import state from './state';
import mutations from './mutations';

export default new vuex.Store({
  state,
  actions,
  mutations,
  getters: {
    selectedModel: state => {
      if(!state.selectedModelId || !state.models)
        return null;

      return state.models.find(({_id}) => _id === state.selectedModelId)
    }
  }
})