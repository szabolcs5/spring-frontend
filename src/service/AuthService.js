import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL ?? 'http://localhost:3000';

export function sendLoginRequest(data) {
  return axios.post(`${API_URL}/api/login`, data);
}

export function sendRegisterRequest(data) {
  return axios.post(`${API_URL}/api/register`, data);
}
