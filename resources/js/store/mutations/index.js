export default {
    FETCHING_MODELS(state, status){
        state.fetchingModels = status;
    },
    SET_MODELS(state, models){
        state.models = models;
    },
    SET_MODEL_BEING_EDITED(state, modelId){
        state.modelBeingEditedId = modelId;
    },
    SAVING_MODEL(state, status){
        state.savingModel = status;
    }
}