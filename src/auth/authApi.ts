import { frappeClient } from '../api/frappeClient';

export async function login(email: string, password: string) {
  return frappeClient.post('/api/method/login', { usr: email, pwd: password });
}

export async function logout() {
  return frappeClient.get('/api/method/logout');
}

export async function getCurrentUser(): Promise<string> {
  const response = await frappeClient.get('/api/method/frappe.auth.get_logged_user');
  return response.data.message;
}