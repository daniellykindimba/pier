import { post, get, patch, remove } from "./setup";
// import { getToken } from "../auth";

export const populateModel = async (modelName) => {
    // const token = await getToken();
    return post(`/model/${modelName}/populate`, null, token);
};

export const fetchModelRecords = async (modelName) => {
    // const token = await getToken();
    return get(`/api/${modelName}`, token);
};

export const deleteRecord = async (modelName, rowId) => {
    // const token = await getToken();
    return remove(`/api/${modelName}/${rowId}`, token);
};