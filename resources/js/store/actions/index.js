import { handleNetworkError, showSuccessToast } from '../../utils';
import { fetchModels, saveModel, deleteModel, insertModel } from '../../services/API';
import router from '../../router';

export const getModels = async ({ commit }) => {
    commit('FETCHING_MODELS', true);

    try {
        const res = await fetchModels();
        const models = res.map(model => {
            model.fields = JSON.parse(model.fields);
            return model;
        });
        commit('FETCHING_MODELS', false);
        commit('SET_MODELS', models);
    } catch (error) {
        commit('FETCHING_MODELS', false);
        handleNetworkError(error, "Error fetching models:");
    }
}

export const setModelBeingEdited = ({ commit }, modelId) => {
    commit('SET_MODEL_BEING_EDITED', modelId);
}

export const createModel = async ({ commit, state }, data) => {
    commit('SAVING_MODEL', true);
    try {
        const model = await insertModel(data);
        model.fields = JSON.parse(model.fields);
        
        commit('SAVING_MODEL', false);

        let models = state.models;
        if (!models)
            models = [];

        models.push(model);

        commit('SET_MODELS', models);
        router.replace(`/models/${model._id}/details`);
        showSuccessToast("Model created");
    } catch (error) {
        handleNetworkError(error, `Error creating model:`);
        commit('SAVING_MODEL', false);
    }
}

export const updateModel = async ({ commit, state }, updatedModel) => {
    commit('SAVING_MODEL', true);
    try {
        await saveModel(updatedModel);
        commit('SAVING_MODEL', false);

        let models = state.models;
        if (!models)
            models = [];

        models = models.map(model => {
            if (model._id === updatedModel._id)
                return updatedModel;

            return model;
        });

        commit('SET_MODELS', models);
        router.replace('/models');
        showSuccessToast("Model updated");
    } catch (error) {
        handleNetworkError(error, `Error updating model:`);
        commit('SAVING_MODEL', false);
    }
}

export const removeModel = async ({ commit, state }, modelId) => {
    let models = state.models;
    if(!models)
        models = [];

    function setDeletingModelStatus(deleting){
        models = models.map(model => {
            if(model._id === modelId)
                return {...model, deleting};

            return model;
        });
        commit('SET_MODELS', models);
    }

    try {
        setDeletingModelStatus(true);
        await deleteModel(modelId);
        
        models = models.filter(model => {
            return model._id !== modelId;
        });
        commit('SET_MODELS', models);

        showSuccessToast(`Model deleted`);
    } catch (error) {
        handleNetworkError(error, `Error deleting model:`);
        setDeletingModelStatus(false);
    }
}