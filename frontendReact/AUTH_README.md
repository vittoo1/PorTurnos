# Sistema de Autenticación - PorTurnos

## 🚀 Características Implementadas

### ✅ Autenticación Completa
- **Login/Logout** con JWT tokens
- **Registro de usuarios** con validación
- **Persistencia de sesión** en localStorage
- **Refresh automático de tokens** cuando expiran
- **Manejo de errores** robusto

### ✅ Seguridad
- **Rutas protegidas** con componente `ProtectedRoute`
- **Verificación de roles** para acceso granular
- **Interceptores de Axios** para manejo automático de tokens
- **Prevención de importaciones circulares**

### ✅ Arquitectura
- **Context API** para estado global de autenticación
- **Servicios separados** para lógica de negocio
- **Cliente HTTP centralizado** con interceptores
- **Organización modular** por características

## 📁 Estructura de Archivos

```
src/
├── modules/auth/
│   ├── context/
│   │   └── AuthContext.jsx          # Contexto de autenticación
│   ├── components/
│   │   └── ProtectedRoute.jsx       # Componente para rutas protegidas
│   ├── pages/
│   │   ├── Login.jsx                # Página de login
│   │   └── Register.jsx             # Página de registro
│   └── service/
│       └── authService.js           # Servicios de autenticación
├── service/
│   └── apiClient.js                 # Cliente HTTP con interceptores
└── App.jsx                          # Configuración de rutas
```

## 🔧 Configuración

### 1. Variables de Entorno
Crear archivo `.env` en la raíz del proyecto:
```bash
VITE_API_BACKEND=https://porturnos.onrender.com/
```

### 2. Dependencias
Todas las dependencias ya están instaladas:
```json
{
  "axios": "^1.11.0",
  "react-router-dom": "^7.8.0",
  "react": "^19.1.1"
}
```

## 🎯 Uso del Sistema

### Hook useAuth
```jsx
import { useAuth } from '../modules/auth/context/AuthContext';

function MyComponent() {
  const { 
    user, 
    isAuthenticated, 
    loading, 
    login, 
    logout, 
    register 
  } = useAuth();

  if (loading) return <div>Cargando...</div>;
  
  return (
    <div>
      {isAuthenticated ? (
        <p>Hola, {user?.nombres}</p>
      ) : (
        <p>Por favor inicia sesión</p>
      )}
    </div>
  );
}
```

### Rutas Protegidas
```jsx
// Ruta básica protegida
<Route path="/dashboard" element={
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
} />

// Ruta con verificación de roles
<Route path="/admin" element={
  <ProtectedRoute roles={['ADMIN']}>
    <AdminPanel />
  </ProtectedRoute>
} />
```

### Servicios de Autenticación
```jsx
import { login, register, logout } from '../modules/auth/service/authService';

// Login
const userData = await login({ email, password });

// Registro
await register({ email, password, nombres, apellidos });

// Logout
await logout();
```

## 🔄 Flujo de Autenticación

### 1. Login
1. Usuario envía credenciales
2. Backend valida y retorna `{ accessToken, refreshToken, user }`
3. Tokens se almacenan en localStorage
4. Usuario es redirigido al dashboard

### 2. Refresh Automático
1. Cliente hace petición con token expirado
2. Interceptor detecta error 401
3. Se intenta refresh con `refreshToken`
4. Si es exitoso, se actualiza el token y se reintenta la petición
5. Si falla, se limpia la sesión y se redirige al login

### 3. Logout
1. Se envía petición de logout al backend (opcional)
2. Se limpian todos los tokens del localStorage
3. Usuario es redirigido al login

## 🛡️ Seguridad

### Tokens
- **Access Token**: JWT para autenticación de peticiones
- **Refresh Token**: Para renovar access tokens expirados
- **Almacenamiento**: localStorage con claves específicas

### Interceptores
- **Request**: Adjunta automáticamente `Authorization: Bearer <token>`
- **Response**: Maneja errores 401 y reintentos con refresh

### Rutas Protegidas
- **Verificación de autenticación** antes de renderizar
- **Verificación de roles** para acceso granular
- **Redirección automática** al login si no hay sesión

## 🧪 Testing

### Verificar Configuración
```bash
# 1. Crear archivo .env
echo "VITE_API_BACKEND=https://porturnos.onrender.com/" > .env

# 2. Instalar dependencias (ya están instaladas)
npm install

# 3. Levantar proyecto
npm run dev

# 4. Verificar en consola del navegador
# Deberías ver: "✅ Sistema de autenticación configurado correctamente"
```

### Flujos de Prueba
1. **Registro**: Crear cuenta nueva
2. **Login**: Iniciar sesión con credenciales válidas
3. **Navegación**: Acceder a rutas protegidas
4. **Logout**: Cerrar sesión y verificar redirección

## 🚨 Solución de Problemas

### Error: "useAuth must be used within an AuthProvider"
- Verificar que `AuthProvider` envuelva toda la aplicación
- Asegurar que esté dentro de `BrowserRouter`

### Error: "Network Error" en login
- Verificar que `VITE_API_BACKEND` esté configurado correctamente
- Comprobar que el backend esté funcionando

### Tokens no se almacenan
- Verificar que el backend retorne `{ accessToken, refreshToken, user }`
- Comprobar que localStorage esté disponible

### Rutas protegidas no funcionan
- Verificar que `ProtectedRoute` esté importado correctamente
- Comprobar que el contexto de autenticación esté funcionando

## 📚 Recursos Adicionales

- [React Context API](https://react.dev/reference/react/createContext)
- [React Router v6](https://reactrouter.com/en/main)
- [Axios Interceptors](https://axios-http.com/docs/interceptors)
- [JWT Authentication](https://jwt.io/)

## 🎉 Estado del Proyecto

✅ **Sistema de autenticación completamente implementado**
✅ **Rutas protegidas funcionando**
✅ **Manejo de tokens y refresh automático**
✅ **Context API configurado**
✅ **Interceptores de Axios funcionando**
✅ **Componentes de UI integrados**

El sistema está listo para producción y maneja todos los casos de uso de autenticación de manera robusta y segura.
