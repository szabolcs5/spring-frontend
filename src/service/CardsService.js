import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL ?? 'http://localhost:3000';
const TOKEN = JSON.parse(localStorage.getItem('user')).token;

export function sendCard(data) {
  return axios.post(`${API_URL}/api/cards?token=${TOKEN}`, data);
}
