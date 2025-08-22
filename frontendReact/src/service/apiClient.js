import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BACKEND || 'https://porturnos.onrender.com/';

// Instancia principal para toda la app
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

let isRefreshing = false;
let pendingRequests = [];

function setAuthHeader(config) {
  if (typeof window === 'undefined') return config;
  const token = window.localStorage.getItem('app_token');
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}

apiClient.interceptors.request.use(
  (config) => setAuthHeader(config),
  (error) => Promise.reject(error)
);

// Utiliza axios "crudo" para evitar import circular con authService
async function refreshAccessToken() {
  if (typeof window === 'undefined') return null;
  const refreshToken = window.localStorage.getItem('app_refresh_token');
  if (!refreshToken) return null;

  const url = new URL('/auth/refresh', BASE_URL).toString();
  const resp = await axios.post(url, { refreshToken });
  return resp.data; // { accessToken, refreshToken?, user? }
}

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error?.response?.status;

    if (status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // Cola de peticiones en espera de refresh
        return new Promise((resolve, reject) => {
          pendingRequests.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return apiClient(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const data = await refreshAccessToken();
        if (!data?.accessToken) {
          throw new Error('No accessToken in refresh response');
        }

        // Guardar nuevo token/refresh si viene
        if (typeof window !== 'undefined') {
          window.localStorage.setItem('app_token', data.accessToken);
          if (data.refreshToken) {
            window.localStorage.setItem('app_refresh_token', data.refreshToken);
          }
          if (data.user) {
            window.localStorage.setItem('app_user', JSON.stringify(data.user));
          }
        }

        // Procesar cola
        pendingRequests.forEach(({ resolve }) => resolve(data.accessToken));
        pendingRequests = [];
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return apiClient(originalRequest);
      } catch (refreshErr) {
        // Falla total: limpiar sesión y redirigir a login
        if (typeof window !== 'undefined') {
          window.localStorage.removeItem('app_token');
          window.localStorage.removeItem('app_refresh_token');
          window.localStorage.removeItem('app_user');
          if (window.location.pathname !== '/login') {
            window.location.href = '/login';
          }
        }
        pendingRequests.forEach(({ reject }) => reject(refreshErr));
        pendingRequests = [];
        return Promise.reject(refreshErr);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;