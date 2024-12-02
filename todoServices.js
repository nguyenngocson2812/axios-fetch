import request from '../utils/httpRequest'; // Import httpRequest

const TODOS_API = 'todos';

// Helper function to get token from storage (example)
const getAuthHeaders = () => {
    const token = localStorage.getItem('token'); // Or from context, Redux store, etc.
    return { Authorization: `Bearer ${token}` };
};

// Get all todos
const getAllTodos = async () => {
    try {
        const res = await request.get(TODOS_API); // Sử dụng method GET từ httpRequest
        return res.data.todoList;
    } catch (error) {
        console.error('Error getting todos:', error);
        throw error;
    }
};

// Get a single todo by id
const getTodoById = async (id) => {
    try {
        const res = await request.get(`${TODOS_API}/${id}`, {
            headers: getAuthHeaders(),
        });
        return res.data;
    } catch (error) {
        console.error('Error getting todo by ID:', error);
        throw error;
    }
};

// Create a new todo
const createTodo = async (data) => {
    try {
        const res = await request.post(TODOS_API, data, {
            headers: getAuthHeaders(),
        });
        return res.data;
    } catch (error) {
        console.error('Error creating todo:', error);
        throw error;
    }
};

// Update an existing todo
const updateTodo = async (id, data) => {
    try {
        const res = await request.put(`${TODOS_API}/${id}`, data, {
            headers: getAuthHeaders(),
        });
        return res.data;
    } catch (error) {
        console.error('Error updating todo:', error);
        throw error;
    }
};

// Delete a todo
const deleteTodo = async (id) => {
    try {
        const res = await request.del(`${TODOS_API}/${id}`, {
            headers: getAuthHeaders(),
        });
        return res.data;
    } catch (error) {
        console.error('Error deleting todo:', error);
        throw error;
    }
};

const todoServices = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
};

export default todoServices;
