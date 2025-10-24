import axios from "axios";

// Base URL from environment variable
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Fetch one employee by ID
export const getEmployeeById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/employees/${id}`);
    return response.data; // returns employee object
  } catch (error) {
    console.error("Error fetching employee by ID:", error);
    throw error; // allow component to handle error
  }
};

// Fetch employees by first name
export const getEmployeesByFirstName = async (firstName) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/employees/firstName/${firstName}`);
    return response.data; // returns array of employees
  } catch (error) {
    console.error("Error fetching employees by first name:", error);
    throw error;
  }
};

// Ping endpoint for testing connectivity
export const pingAPI = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/employees/ping`);
    return response.data;
  } catch (error) {
    console.error("Error pinging API:", error);
    throw error;
  }
};
