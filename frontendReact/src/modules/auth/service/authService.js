import apiClient from '../../../service/apiClient';

const STORAGE = {
  token: 'app_token',
  refresh: 'app_refresh_token',
  user: 'app_user',
};

export function getToken() {
  if (typeof window === 'undefined') return null;
  return window.localStorage.getItem(STORAGE.token);
}
export function getRefreshToken() {
  if (typeof window === 'undefined') return null;
  return window.localStorage.getItem(STORAGE.refresh);
}
export function setToken(token) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE.token, token);
}
export function setRefreshToken(refreshToken) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE.refresh, refreshToken);
}
export function setUser(user) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE.user, JSON.stringify(user));
}
export function getUser() {
  if (typeof window === 'undefined') return null;
  const raw = window.localStorage.getItem(STORAGE.user);
  return raw ? JSON.parse(raw) : null;
}
export function clearSession() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(STORAGE.token);
  window.localStorage.removeItem(STORAGE.refresh);
  window.localStorage.removeItem(STORAGE.user);
}

export async function login({ email, password }) {
  const { data } = await apiClient.post('/auth/login', { email, password });
  // esperado: { accessToken, refreshToken, user }
  if (data?.accessToken) setToken(data.accessToken);
  if (data?.refreshToken) setRefreshToken(data.refreshToken);
  if (data?.user) setUser(data.user);
  return data;
}

export async function register(payload) {
  const { data } = await apiClient.post('/auth/register', payload);
  return data;
}

export async function fetchProfile() {
  const { data } = await apiClient.get('/auth/me');
  if (data) setUser(data);
  return data;
}

// Nota: El refresh real se maneja en el interceptor de apiClient para evitar imports circulares.
// Este método es opcional por si se desea forzar un refresh manual desde el contexto.
export async function refreshTokenManual() {
  const { data } = await apiClient.post('/auth/refresh', {
    refreshToken: getRefreshToken(),
  });
  if (data?.accessToken) setToken(data.accessToken);
  if (data?.refreshToken) setRefreshToken(data.refreshToken);
  if (data?.user) setUser(data.user);
  return data;
}

export async function logout() {
  try {
    await apiClient.post('/auth/logout'); // opcional en backend
  } catch (_) {
    // ignorar errores de logout del backend
  } finally {
    clearSession();
  }
}