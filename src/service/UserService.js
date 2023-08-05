import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL ?? 'http://localhost:3000';
const TOKEN = JSON.parse(localStorage.getItem('user')).token;


export function findById(id) {
  return axios.get(`${API_URL}/api/users/${id}?token=${TOKEN}`);
}

export function updateUser(id, data) {
  return axios.patch(`${API_URL}/api/users/${id}?token=${TOKEN}`, data);
}
