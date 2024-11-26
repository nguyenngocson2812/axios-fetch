// res.json({ backend })
const fetchAPI = async () => {
    const res = fetch('https://jsonplaceholder.typicode.com/todos/1')
    return res.json();
}
const postAPI = async () => {
    const response = await fetch('https://api-xi-fawn.vercel.app/api/v1/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    return response.json();
}
const deleteAPI = async () => {
    const response = await fetch(url, {
        method: "DELETE"
    })
    return response.json();
}
const fetchWithBearerToken = async (url, token) => {
    const response = await fetch(url, {
        method: 'POST', // POST, GET
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.json();
}