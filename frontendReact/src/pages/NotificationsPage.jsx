import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState([])
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState('all')

    // Simular carga de notificaciones
    useEffect(() => {
        // Simular tiempo de carga
        const timer = setTimeout(() => {
            // En una aplicación real, esto vendría de una API
            const mockNotifications = [
                {
                    id: 1,
                    type: 'message',
                    title: 'Nuevo mensaje',
                    content: 'Ana García te ha enviado un mensaje sobre Catan',
                    timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutos atrás
                    read: false,
                    link: '/marketplace/messages',
                    sender: {
                        id: 101,
                        name: 'Ana García',
                        avatar: 'https://via.placeholder.com/40'
                    }
                },
                {
                    id: 2,
                    type: 'offer',
                    title: 'Nueva oferta',
                    content: 'Has recibido una oferta de 22€ por Dixit',
                    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutos atrás
                    read: false,
                    link: '/marketplace/seller-dashboard',
                    product: {
                        id: 201,
                        name: 'Dixit',
                        image: 'https://via.placeholder.com/40'
                    }
                },
                {
                    id: 3,
                    type: 'sale',
                    title: '¡Venta completada!',
                    content: 'Tu venta de Monopoly ha sido completada',
                    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 horas atrás
                    read: true,
                    link: '/marketplace/seller-dashboard',
                    product: {
                        id: 202,
                        name: 'Monopoly',
                        image: 'https://via.placeholder.com/40'
                    }
                },
                {
                    id: 4,
                    type: 'system',
                    title: 'Verificación completada',
                    content: 'Tu cuenta ha sido verificada correctamente',
                    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 día atrás
                    read: true,
                    link: '/marketplace/seller-dashboard'
                },
                {
                    id: 5,
                    type: 'rating',
                    title: 'Nueva valoración',
                    content: 'Carlos Ruiz te ha dejado una valoración de 5 estrellas',
                    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 36), // 1.5 días atrás
                    read: true,
                    link: '/marketplace/seller-dashboard',
                    sender: {
                        id: 102,
                        name: 'Carlos Ruiz',
                        avatar: 'https://via.placeholder.com/40'
                    }
                },
                {
                    id: 6,
                    type: 'purchase',
                    title: 'Compra realizada',
                    content: 'Has comprado Carcassonne por 25€',
                    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48), // 2 días atrás
                    read: true,
                    link: '/marketplace/orders',
                    product: {
                        id: 203,
                        name: 'Carcassonne',
                        image: 'https://via.placeholder.com/40'
                    }
                },
                {
                    id: 7,
                    type: 'system',
                    title: 'Bienvenido al Marketplace',
                    content: 'Gracias por unirte a nuestra comunidad de juegos de mesa usados',
                    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 72), // 3 días atrás
                    read: true,
                    link: '/marketplace'
                }
            ]

            setNotifications(mockNotifications)
            setLoading(false)
        }, 800)

        return () => clearTimeout(timer)
    }, [])

    // Marcar notificación como leída
    const markAsRead = (id) => {
        setNotifications(prev => 
            prev.map(notification => 
                notification.id === id 
                    ? { ...notification, read: true } 
                    : notification
            )
        )
    }

    // Marcar todas como leídas
    const markAllAsRead = () => {
        setNotifications(prev => 
            prev.map(notification => ({ ...notification, read: true }))
        )
    }

    // Eliminar notificación
    const removeNotification = (id) => {
        setNotifications(prev => prev.filter(notification => notification.id !== id))
    }

    // Eliminar todas las notificaciones
    const clearAllNotifications = () => {
        setNotifications([])
    }

    // Formatear fecha
    const formatDate = (date) => {
        return new Intl.DateTimeFormat('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date)
    }

    // Obtener icono según tipo de notificación
    const getNotificationIcon = (type) => {
        switch(type) {
            case 'message':
                return 'bi-chat-dots-fill'
            case 'offer':
                return 'bi-tag-fill'
            case 'sale':
                return 'bi-bag-check-fill'
            case 'purchase':
                return 'bi-cart-check-fill'
            case 'system':
                return 'bi-info-circle-fill'
            case 'rating':
                return 'bi-star-fill'
            default:
                return 'bi-bell-fill'
        }
    }

    // Obtener color según tipo de notificación
    const getNotificationColor = (type) => {
        switch(type) {
            case 'message':
                return 'primary'
            case 'offer':
                return 'success'
            case 'sale':
                return 'info'
            case 'purchase':
                return 'purple'
            case 'system':
                return 'secondary'
            case 'rating':
                return 'warning'
            default:
                return 'dark'
        }
    }

    // Filtrar notificaciones
    const filteredNotifications = notifications.filter(notification => {
        if (filter === 'all') return true
        if (filter === 'unread') return !notification.read
        return notification.type === filter
    })

    return (
        <div className="container py-5">
            <div className="row mb-4">
                <div className="col">
                    <h1 className="h3 mb-0">Notificaciones</h1>
                </div>
                <div className="col-auto">
                    <div className="d-flex gap-2">
                        {notifications.some(n => !n.read) && (
                            <button 
                                className="btn btn-outline-primary btn-sm"
                                onClick={markAllAsRead}
                            >
                                <i className="bi bi-check-all me-1"></i>
                                Marcar todas como leídas
                            </button>
                        )}
                        {notifications.length > 0 && (
                            <button 
                                className="btn btn-outline-danger btn-sm"
                                onClick={clearAllNotifications}
                            >
                                <i className="bi bi-trash me-1"></i>
                                Eliminar todas
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col">
                    <div className="btn-group">
                        <button 
                            className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setFilter('all')}
                        >
                            Todas
                        </button>
                        <button 
                            className={`btn ${filter === 'unread' ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setFilter('unread')}
                        >
                            No leídas
                        </button>
                        <button 
                            className={`btn ${filter === 'message' ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setFilter('message')}
                        >
                            Mensajes
                        </button>
                        <button 
                            className={`btn ${filter === 'offer' ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setFilter('offer')}
                        >
                            Ofertas
                        </button>
                        <button 
                            className={`btn ${filter === 'sale' ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setFilter('sale')}
                        >
                            Ventas
                        </button>
                        <button 
                            className={`btn ${filter === 'purchase' ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setFilter('purchase')}
                        >
                            Compras
                        </button>
                        <button 
                            className={`btn ${filter === 'system' ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setFilter('system')}
                        >
                            Sistema
                        </button>
                    </div>
                </div>
            </div>

            {loading ? (
                <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                    <p className="mt-3">Cargando notificaciones...</p>
                </div>
            ) : filteredNotifications.length > 0 ? (
                <div className="card shadow-sm">
                    <div className="list-group list-group-flush">
                        {filteredNotifications.map(notification => (
                            <div 
                                key={notification.id} 
                                className={`list-group-item ${!notification.read ? 'bg-light' : ''}`}
                            >
                                <div className="d-flex">
                                    <div className="me-3">
                                        <div className={`bg-${getNotificationColor(notification.type)} text-white rounded-circle d-flex align-items-center justify-content-center`} style={{ width: '48px', height: '48px' }}>
                                            <i className={`bi ${getNotificationIcon(notification.type)}`}></i>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between align-items-center mb-1">
                                            <h5 className="mb-0">{notification.title}</h5>
                                            <small className="text-muted">{formatDate(notification.timestamp)}</small>
                                        </div>
                                        <p className="mb-2">{notification.content}</p>
                                        <div className="d-flex gap-2">
                                            <Link to={notification.link} className="btn btn-sm btn-primary">
                                                Ver detalles
                                            </Link>
                                            {!notification.read && (
                                                <button 
                                                    className="btn btn-sm btn-outline-secondary"
                                                    onClick={() => markAsRead(notification.id)}
                                                >
                                                    Marcar como leída
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <button 
                                            className="btn btn-sm text-muted"
                                            onClick={() => removeNotification(notification.id)}
                                            aria-label="Eliminar notificación"
                                        >
                                            <i className="bi bi-x-lg"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="text-center py-5 card shadow-sm">
                    <div className="card-body py-5">
                        <i className="bi bi-bell-slash fs-1 text-muted"></i>
                        <h3 className="mt-3">No hay notificaciones</h3>
                        <p className="text-muted mb-4">
                            {filter !== 'all' 
                                ? 'No hay notificaciones que coincidan con el filtro seleccionado.' 
                                : 'No tienes notificaciones en este momento.'}
                        </p>
                        {filter !== 'all' && (
                            <button 
                                className="btn btn-primary"
                                onClick={() => setFilter('all')}
                            >
                                Ver todas las notificaciones
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}