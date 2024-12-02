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

export default httpRequest;

// --option--

httpRequest.get(api, {
    headers: {
        Authorization: 'Bearer your_token_here',
        'Content-Type': 'application/json',
    },
    params: { page: 1, limit: 10 },
    timeout: 5000,
});

get('/endpoint', {
    params: { key: 'value' },
    headers: { Authorization: 'Bearer your-token' },
}).then((data) => console.log(data));

post(
    '/endpoint',
    { key: 'value' }, // Request body
    { headers: { Authorization: 'Bearer your-token' } }, // Custom headers
).then((data) => console.log(data));

put(
    '/endpoint/1',
    { updatedKey: 'newValue' }, // Request body
    { headers: { Authorization: 'Bearer your-token' } }, // Custom headers
).then((data) => console.log(data));

del('/endpoint/1', {
    headers: { Authorization: 'Bearer your-token' }, // Custom headers
}).then((data) => console.log(data));
