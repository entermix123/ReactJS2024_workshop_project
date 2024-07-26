import requester from "./requester"

const BASE_URL = 'http://localhost:3030/users';

/**
 * 
 * @param {string} email 
 * @param {string} password 
 */

// Login
export const login = (email, password) => requester.post(`${BASE_URL}/login`, { email, password });

// Register
export const register = (email, password) => requester.post(`${BASE_URL}/register`, { email, password });

// Logout
export const logout = () => requester.get(`${BASE_URL}/logout`);