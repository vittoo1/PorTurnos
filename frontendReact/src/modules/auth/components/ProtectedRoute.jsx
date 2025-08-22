import { useAuth } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, roles }) => {
  const { isAuthenticated, loading, user } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirigir al login y guardar la ubicación actual para redirigir después del login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Verificación de roles si se especifican
  if (roles && roles.length > 0) {
    const hasRole = roles.includes(user?.role);
    if (!hasRole) {
      return <Navigate to="/" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;