import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  login as loginApi,
  register as registerApi,
  fetchProfile,
  logout as logoutApi,
  getUser as getUserStorage,
  getToken as getTokenStorage,
} from '../service/authService';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar sesión desde storage al montar
  useEffect(() => {
    const t = getTokenStorage();
    const u = getUserStorage();
    setToken(t);
    setUser(u);
    setLoading(false);
  }, []);

  const isAuthenticated = Boolean(token);

  async function login(credentials) {
    setError(null);
    try {
      const data = await loginApi(credentials);
      setToken(data?.accessToken || null);
      setUser(data?.user || null);
      navigate('/', { replace: true });
      return data;
    } catch (err) {
      const msg = err?.response?.data?.message || err.message;
      setError(msg);
      throw err;
    }
  }

  async function register(payload) {
    setError(null);
    try {
      const data = await registerApi(payload);
      return data;
    } catch (err) {
      const msg = err?.response?.data?.message || err.message;
      setError(msg);
      throw err;
    }
  }

  async function loadProfile() {
    try {
      const me = await fetchProfile();
      setUser(me);
      return me;
    } catch (err) {
      // Silencioso si falla /auth/me
      return null;
    }
  }

  async function logout() {
    try {
      await logoutApi();
    } finally {
      setUser(null);
      setToken(null);
      navigate('/login', { replace: true });
    }
  }

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated,
      loading,
      error,
      login,
      register,
      logout,
      loadProfile,
      setUser,
    }),
    [user, token, isAuthenticated, loading, error]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
}