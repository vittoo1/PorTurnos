import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotificationSystem() {
    const [notifications, setNotifications] = useState([])
    const [unreadCount, setUnreadCount] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    // Simular carga de notificaciones
    useEffect(() => {
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
            }
        ]

        setNotifications(mockNotifications)
        setUnreadCount(mockNotifications.filter(n => !n.read).length)
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
        setUnreadCount(prev => Math.max(0, prev - 1))
    }

    // Marcar todas como leídas
    const markAllAsRead = () => {
        setNotifications(prev => 
            prev.map(notification => ({ ...notification, read: true }))
        )
        setUnreadCount(0)
    }

    // Eliminar notificación
    const removeNotification = (id) => {
        setNotifications(prev => prev.filter(notification => notification.id !== id))
        // Actualizar contador de no leídas si es necesario
        const wasUnread = notifications.find(n => n.id === id)?.read === false
        if (wasUnread) {
            setUnreadCount(prev => Math.max(0, prev - 1))
        }
    }

    // Formatear tiempo relativo
    const formatRelativeTime = (date) => {
        const now = new Date()
        const diffInSeconds = Math.floor((now - date) / 1000)
        
        if (diffInSeconds < 60) {
            return 'Ahora mismo'
        } else if (diffInSeconds < 3600) {
            const minutes = Math.floor(diffInSeconds / 60)
            return `Hace ${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`
        } else if (diffInSeconds < 86400) {
            const hours = Math.floor(diffInSeconds / 3600)
            return `Hace ${hours} ${hours === 1 ? 'hora' : 'horas'}`
        } else {
            const days = Math.floor(diffInSeconds / 86400)
            return `Hace ${days} ${days === 1 ? 'día' : 'días'}`
        }
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
            case 'system':
                return 'secondary'
            case 'rating':
                return 'warning'
            default:
                return 'dark'
        }
    }

    return (
        <div className="notification-system">
            {/* Botón de notificaciones */}
            <div className="dropdown">
                <button 
                    className="btn btn-link position-relative p-0 text-dark" 
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                >
                    <i className="bi bi-bell fs-5"></i>
                    {unreadCount > 0 && (
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {unreadCount}
                            <span className="visually-hidden">notificaciones sin leer</span>
                        </span>
                    )}
                </button>

                {/* Panel de notificaciones */}
                <div className={`dropdown-menu dropdown-menu-end p-0 shadow-lg ${isOpen ? 'show' : ''}`} style={{ width: '350px', maxHeight: '500px', overflow: 'hidden' }}>
                    <div className="p-3 border-bottom d-flex justify-content-between align-items-center bg-light">
                        <h6 className="mb-0">Notificaciones</h6>
                        {unreadCount > 0 && (
                            <button 
                                className="btn btn-sm btn-link text-decoration-none p-0"
                                onClick={markAllAsRead}
                            >
                                Marcar todas como leídas
                            </button>
                        )}
                    </div>

                    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                        {notifications.length > 0 ? (
                            <div className="list-group list-group-flush">
                                {notifications.map(notification => (
                                    <div 
                                        key={notification.id} 
                                        className={`list-group-item list-group-item-action ${!notification.read ? 'bg-light' : ''}`}
                                        onClick={() => markAsRead(notification.id)}
                                    >
                                        <div className="d-flex">
                                            <div className="me-3">
                                                <div className={`notification-icon bg-${getNotificationColor(notification.type)} text-white rounded-circle d-flex align-items-center justify-content-center`} style={{ width: '40px', height: '40px' }}>
                                                    <i className={`bi ${getNotificationIcon(notification.type)}`}></i>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="d-flex justify-content-between align-items-center mb-1">
                                                    <h6 className="mb-0">{notification.title}</h6>
                                                    <small className="text-muted">{formatRelativeTime(notification.timestamp)}</small>
                                                </div>
                                                <p className="mb-1 small">{notification.content}</p>
                                                <Link to={notification.link} className="btn btn-sm btn-link p-0 text-decoration-none">
                                                    Ver detalles
                                                </Link>
                                            </div>
                                            <div>
                                                <button 
                                                    className="btn btn-sm text-muted p-0 ms-2"
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        removeNotification(notification.id)
                                                    }}
                                                >
                                                    <i className="bi bi-x"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-5">
                                <i className="bi bi-bell-slash fs-1 text-muted"></i>
                                <p className="mt-3 mb-0 text-muted">No tienes notificaciones</p>
                            </div>
                        )}
                    </div>

                    <div className="p-2 border-top text-center">
                        <Link to="/marketplace/notifications" className="btn btn-link text-decoration-none w-100">
                            Ver todas las notificaciones
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}