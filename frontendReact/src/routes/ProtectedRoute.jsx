import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ProtectedRoute({ roles }) {
  const { isAuthenticated, user, loading } = useAuth();

  if (loading) {
    return <div style={{ padding: 24 }}>Cargando…</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (roles && roles.length > 0) {
    const ok = roles.includes(user?.role);
    if (!ok) return <Navigate to="/" replace />;
  }

  return <Outlet />;
}