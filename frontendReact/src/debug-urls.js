// Archivo de debug para verificar URLs
console.log('🔍 DEBUG: Verificando configuración de URLs');

// Verificar variables de entorno
console.log('VITE_API_BACKEND:', import.meta.env.VITE_API_BACKEND);
console.log('VITE_API_BACKEND type:', typeof import.meta.env.VITE_API_BACKEND);

// Verificar BASE_URL del apiClient
import apiClient from './service/apiClient';
console.log('apiClient baseURL:', apiClient.defaults.baseURL);

// Verificar rutas que se generan
const testUrls = {
  login: new URL('/auth/login', apiClient.defaults.baseURL).toString(),
  register: new URL('/auth/register', apiClient.defaults.baseURL).toString(),
  profile: new URL('/auth/me', apiClient.defaults.baseURL).toString()
};

console.log('🔗 URLs generadas:');
console.log('Login:', testUrls.login);
console.log('Register:', testUrls.register);
console.log('Profile:', testUrls.profile);

// Verificar que el archivo .env se esté leyendo
if (import.meta.env.VITE_API_BACKEND) {
  console.log('✅ Archivo .env detectado correctamente');
} else {
  console.log('❌ Archivo .env NO detectado');
}

export default testUrls;
