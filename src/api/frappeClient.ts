
import axios from 'axios';

export const frappeClient = axios.create({
  baseURL: import.meta.env.VITE_FRAPPE_BASE_URL || 'http://localhost:8000',
  withCredentials: true
});
