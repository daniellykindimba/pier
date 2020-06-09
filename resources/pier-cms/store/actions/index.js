import { handleNetworkError, showSuccessToast, toPascalCase } from '../../Utils';
import { fetchModelRecords, insertRecord, deleteRecord, populateModel } from '../../API';
import router from '../../router';

export const setModels = ({ commit }, models) => {
    commit('SET_MODELS', models);
}

export const setSelectedModel = ({ commit }, model) => {
    commit('SET_SELECTED_MODEL', model);
}

export const populateRecords = async ({ state, commit, dispatch }) => {
    if(!state.selectedModelName)
        return;

    commit('POPULATING_RECORDS', true);
    try {
        await populateModel(state.selectedModelName);
        dispatch('fetchRecords');
    } catch (error) {
        handleNetworkError(error, `Error populating ${state.selectedModelName}:`);
        commit('POPULATING_RECORDS', false);
    }
}

export const fetchRecords = async ({ state, getters, commit }) => {
    if(!state.selectedModelName || !getters.selectedModel)
        return;

    const fields = getters.selectedModel.fields;
    const referenceFields = fields.filter(({type}) => type === "reference");
    let referenceParams = [];
    referenceFields.forEach(({label, meta}) => {
        const pascalLabel = toPascalCase(label);
        let param = `with${pascalLabel}`;
        param += pascalLabel !== meta.model ? 'From' + meta.model : '';
        referenceParams.push(param);
    });

    commit('FETCHING_RECORDS', true);
    try {
        const records = await fetchModelRecords(state.selectedModelName, referenceParams.join("&"));
        commit('FETCHING_RECORDS', false);
        commit('SET_RECORDS', records);
    } catch (error) {
        handleNetworkError(error, `Error fetching ${state.selectedModelName}:`);
        commit('FETCHING_RECORDS', false);
    }
}

export const setSelectedRecord = ({ commit }, recordId) => {
    commit('SET_SELECTED_RECORD', recordId);
}

export const createRecord = async ({ commit, state }, data) => {
    commit('SAVING_RECORD', true);
    try {
        let record = await insertRecord(state.selectedModelName, data);
        
        commit('SAVING_RECORD', false);

        let records = state.records;
        if (!records)
            records = [];

        records.unshift(record);

        commit('SET_RECORDS', records);
        router.replace(`/${state.selectedModelName}`);
        showSuccessToast(`${state.selectedModelName} created`);
    } catch (error) {
        handleNetworkError(error, `Error creating ${state.selectedModelName}:`);
        commit('SAVING_RECORD', false);
    }
}

export const updateModel = async ({ commit, state }, updatedRecord) => {
    commit('SAVING_RECORD', true);
    try {
        // await saveModel(state.selectedModelName, updatedRecord);
        // commit('SAVING_RECORD', false);

        // let records = state.records;
        // if (!records)
        //     records = [];

        // records = records.map(record => {
        //     if (record._id === updatedRecord._id)
        //         return updatedrecord;

        //     return record;
        // });

        // commit('SET_RECORDS', records);
        // router.replace(`/${state.selectedModelName}`);
        // showSuccessToast(`${state.selectedModelName} updated`);
    } catch (error) {
        // handleNetworkError(error, `Error updating ${state.selectedModelName}:`);
        // commit('SAVING_RECORD', false);
    }
}

export const removeRecord = async ({ commit, state }, recordId) => {
    if(!state.selectedModelName)
        return;
        
    commit('DELETING_RECORD', true);
    try {
        await deleteRecord(state.selectedModelName, recordId);
        commit('DELETING_RECORD', false);

        let records = state.records;
        if (!records)
            records = [];

        records = records.filter(({_id}) => _id !== recordId);

        commit('SET_RECORDS', records);
        router.replace(`/${state.selectedModelName}`);
        showSuccessToast(`${state.selectedModelName} deleted`);
    } catch (error) {
        handleNetworkError(error, `Error deleting ${state.selectedModelName}:`);
        commit('DELETING_RECORD', false);
    }
}