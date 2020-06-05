export default {
    SET_MODELS(state, models){
        state.models = models;
    },
    SET_SELECTED_MODEL(state, modelName){
        state.selectedModelName = modelName;
    },
    SET_RECORDS(state, records){
        state.records = records;
    },
    SET_SELECTED_RECORD(state, recordId){
        state.selectedRecordId = recordId;
    },
    SAVING_RECORD(state, status){
        state.savingRecord = status;
    },
    FETCHING_RECORDS(state, status){
        state.fetchingRecords = status;
    },
    DELETING_RECORD(state, status){
        state.deletingRecord = status;
    }
}