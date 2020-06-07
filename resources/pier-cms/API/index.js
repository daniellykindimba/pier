import { post, get, patch, remove } from "./setup";
// import { getToken } from "../auth";

export const populateModel = async (modelName) => {
    // const token = await getToken();
    return post(`/model/${modelName}/populate`, null, token);
};

export const fetchModelRecords = async (modelName, references) => {
    // const token = await getToken();
    let url = `/api/${modelName}`;
    if(references && references.length)
        url += "?" + references;

    return get(url, token);
};

export const deleteRecord = async (modelName, rowId) => {
    // const token = await getToken();
    return remove(`/api/${modelName}/${rowId}`, token);
};

export const insertRecord = async (modelName, data) => {
    // const token = await getToken();
    return post(`/api/${modelName}`, data, token);
};