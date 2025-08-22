// Test de conexión al backend
console.log('🧪 TEST: Verificando conexión al backend');

// Función para testear la conexión
export async function testBackendConnection() {
  const baseUrl = import.meta.env.VITE_API_BACKEND || 'https://porturnos.onrender.com/';
  console.log('🔗 Base URL:', baseUrl);
  
  try {
    // Test 1: Verificar que el backend responda
    console.log('📡 Test 1: Verificando respuesta del backend...');
    const response = await fetch(`${baseUrl}auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@test.com',
        password: 'test123'
      })
    });
    
    console.log('📊 Status:', response.status);
    console.log('📊 Status Text:', response.statusText);
    console.log('📊 Headers:', Object.fromEntries(response.headers.entries()));
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Respuesta exitosa:', data);
    } else {
      console.log('❌ Error en respuesta');
      const errorText = await response.text();
      console.log('❌ Error details:', errorText);
    }
    
  } catch (error) {
    console.error('💥 Error de conexión:', error);
    console.error('💥 Error message:', error.message);
    console.error('💥 Error type:', error.constructor.name);
  }
}

// Función para testear con axios
export async function testAxiosConnection() {
  const baseUrl = import.meta.env.VITE_API_BACKEND || 'https://porturnos.onrender.com/';
  console.log('🔗 Test Axios con Base URL:', baseUrl);
  
  try {
    const axios = await import('axios');
    console.log('📦 Axios importado correctamente');
    
    const response = await axios.default.post(`${baseUrl}auth/login`, {
      email: 'test@test.com',
      password: 'test123'
    });
    
    console.log('✅ Axios response:', response.data);
    
  } catch (error) {
    console.error('💥 Axios error:', error);
    if (error.response) {
      console.error('💥 Status:', error.response.status);
      console.error('💥 Data:', error.response.data);
      console.error('💥 Headers:', error.response.headers);
    }
  }
}

// Ejecutar tests automáticamente
setTimeout(() => {
  console.log('🚀 Ejecutando tests de conexión...');
  testBackendConnection();
  testAxiosConnection();
}, 2000);
