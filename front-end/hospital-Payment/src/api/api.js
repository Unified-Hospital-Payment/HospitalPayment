import axios from 'axios';

const APP_URL = "http://localhost:8001"

export const addHospital = async (hospitalData) => {
  try {
    const response = await axios.post(`${APP_URL}/hospital/add`, hospitalData);
    return response.data;
  } catch (error) {
    throw new Error('Error adding hospital: ' + error.message);
  }
};
