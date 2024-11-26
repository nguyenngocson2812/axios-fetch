const axiosAPI = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return res.data;
};

const axiosPostAPI = async (email, password) => {
    const response = await axios.post('https://api-xi-fawn.vercel.app/api/v1/auth/login', {
        email,
        password,
    });
    return response.data;
};

const axiosDeleteAPI = async (url) => {
    const response = await axios.delete(url);
    return response.data;
};

const axiosWithBearerToken = async (url, token) => {
    const response = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};