/**note
 * data in post and put: backend received at req.body
 */
import axios from 'axios';

// Create an axios instance
const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

// GET method
export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

// POST method:
export const post = async (path, data, options = {}) => {
    const response = await httpRequest.post(path, data, options);
    return response.data;
};

// PUT method
export const put = async (path, data, options = {}) => {
    const response = await httpRequest.put(path, data, options);
    return response.data;
};

// DELETE method
export const del = async (path, options = {}) => {
    const response = await httpRequest.delete(path, options);
    return response.data;
};

const request = {
    get,
    post,
    put,
    del,
};
export default request;
