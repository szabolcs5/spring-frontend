import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL ?? 'http://localhost:3000';
const TOKEN = JSON.parse(localStorage.getItem('user')).token;

export function sendItem(itemData) {
  return axios.post(`${API_URL}/api/items?token=${TOKEN}`, itemData);
}

export function getItem(id) {
  return axios.get(`${API_URL}/api/items/${id}?token=${TOKEN}`);
}

export function getItems() {
  return axios.get(`${API_URL}/api/items?token=${TOKEN}`);
}

export function deleteItem(id) {
  return axios.delete(`${API_URL}/api/items/${id}?token=${TOKEN}`);
}
