import axios from 'axios';

// Axios instance configuration
const Api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    headers: { 'Content-Type': 'multipart/form-data' },
});

// Configuration for axios headers
const config = {
    headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`
    }
};

// Test API
export const testApi = () => Api.get("/test");

// Register API
export const registerApi = (data) => Api.post("/api/user/create", data);

// Login API
export const loginApi = (data) => Api.post("/api/user/login", data);

// Get All Pets API
export const getAllPetsApi = async () => {
    return Api.get('/api/pets', config);
};

// Create Pet API
export const createPetApi = async (petData) => {
    return Api.post('/api/pets', petData, config);
};

// Delete Pet API
export const deletePetApi = async (petId) => {
    return Api.delete(`/api/pets/${petId}`, config);
};

// Get Single Pet API
export const getSinglePetApi = async (petId) => {
    return Api.get(`/api/pets/${petId}`, config);
};

// Update Pet API
export const updatePetApi = async (petId, petData) => {
    return Api.put(`/api/pets/${petId}`, petData, config);
};

// User Profile APIs

// Get User Profile API
export const getUserProfile = async (userId) => {
    return Api.get(`/api/user/profile/${userId}`, config);
};
// Update User Profile API
export const updateUserProfile = async (userId, profileData) => {
  return Api.put(`/api/user/update/${userId}`, profileData, config);
};
// Delete User Profile API
export const deleteUserProfile = async (userId) => {
  return Api.delete(`/api/pets/${userId}`, config);
};

export const getMyProfileApi = () => Api.get('/api/user/my_profile', config);
export const updateMyProfileApi = (formData) => Api.put('/api/user/update_my_profile', formData, config);
