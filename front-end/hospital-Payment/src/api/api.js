import axios from 'axios';

const APP_URL = "http://localhost:8001";

// Hospital-related methods
export const addHospital = async (hospitalData) => {
  try {
    const response = await axios.post(`${APP_URL}/hospital/add`, hospitalData);
    return response.data;
  } catch (error) {
    throw new Error('Error adding hospital: ' + error.message);
  }
};

export const fetchAllHospitals = async () => {
  try {
    const response = await axios.get(`${APP_URL}/hospital`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching hospitals: ' + error.message);
  }
};

// User-related methods
export const addUser = async (userData) => {
  try {
    const response = await axios.post(`${APP_URL}/user/add`, userData);
    return response.data;
  } catch (error) {
    throw new Error('Error adding user: ' + error.message);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${APP_URL}/user`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching users: ' + error.message);
  }
};

// Service-related methods
export const addService = async (serviceData) => {
  try {
    const response = await axios.post(`${APP_URL}/services/add`, serviceData);
    return response.data;
  } catch (error) {
    throw new Error('Error adding service: ' + error.message);
  }
};

export const fetchAllServices = async () => {
  try {
    const response = await axios.get(`${APP_URL}/services`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching services: ' + error.message);
  }
};

// Login method
export const login = async (loginData) => {
  try {
    const response = await axios.post(`${APP_URL}/login`, loginData);
    return response.data;
  } catch (error) {
    throw new Error('Error logging in: ' + error.message);
  }
};
