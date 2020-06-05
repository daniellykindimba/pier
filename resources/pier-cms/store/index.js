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
      if(!state.selectedModelName || !state.models)
        return null;

      return state.models.find(({name}) => name === state.selectedModelName)
    },
    selectedRecord: state => {
      if(!state.selectedRecordId || !state.records)
        return null;

      return state.records.find(({_id}) => _id === state.selectedRecordId)
    }
  }
})