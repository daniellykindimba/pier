import { post, get, patch, remove } from "./setup";
import { getToken } from "../auth";

export const fetchModels = async () => {
    const token = await getToken();
    return get("/model", token);
};

export const insertModel = async (data) => {
    const token = await getToken();
    return post("/model", data, token);
};

export const saveModel = async (data) => {
    const token = await getToken();
    return patch("/model", data, token);
};

export const deleteModel = async (modelId) => {
    const token = await getToken();
    return remove(`/model/${modelId}`, token);
  };
  