import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SellerDashboard() {
    // Estados para los diferentes datos del panel
    const [activeTab, setActiveTab] = useState('products')
    const [products, setProducts] = useState([
        { 
            id: 1, 
            title: 'Catan', 
            price: 25, 
            condition: 'Casi nuevo', 
            status: 'active',
            views: 45,
            favorites: 12,
            messages: 3,
            image: 'https://via.placeholder.com/80x80'
        },
        { 
            id: 2, 
            title: 'Pandemic', 
            price: 32, 
            condition: 'Como nuevo', 
            status: 'active',
            views: 38,
            favorites: 8,
            messages: 5,
            image: 'https://via.placeholder.com/80x80'
        },
        { 
            id: 3, 
            title: 'Dixit', 
            price: 18, 
            condition: 'Buen estado', 
            status: 'sold',
            views: 62,
            favorites: 15,
            messages: 7,
            image: 'https://via.placeholder.com/80x80'
        },
        { 
            id: 4, 
            title: 'Ticket to Ride', 
            price: 28, 
            condition: 'Usado', 
            status: 'inactive',
            views: 12,
            favorites: 2,
            messages: 0,
            image: 'https://via.placeholder.com/80x80'
        },
    ])
    
    const [orders, setOrders] = useState([
        { id: 101, product: 'Dixit', buyer: 'Ana García', date: '15/06/2023', price: 18, status: 'completed' },
        { id: 102, product: 'Monopoly', buyer: 'Carlos Ruiz', date: '02/07/2023', price: 15, status: 'shipped' },
        { id: 103, product: 'Risk', buyer: 'Elena Martín', date: '10/07/2023', price: 22, status: 'pending' },
    ])
    
    const [messages, setMessages] = useState([
        { id: 201, from: 'Ana García', subject: 'Consulta sobre Dixit', date: '14/06/2023', read: true },
        { id: 202, from: 'Carlos Ruiz', subject: 'Pregunta sobre envío', date: '01/07/2023', read: true },
        { id: 203, from: 'Elena Martín', subject: 'Disponibilidad de Risk', date: '09/07/2023', read: false },
        { id: 204, from: 'Juan Pérez', subject: 'Interesado en Catan', date: '12/07/2023', read: false },
    ])
    
    const [earnings, setEarnings] = useState({
        total: 55,
        pending: 22,
        monthly: [
            { month: 'Ene', amount: 0 },
            { month: 'Feb', amount: 0 },
            { month: 'Mar', amount: 0 },
            { month: 'Abr', amount: 0 },
            { month: 'May', amount: 15 },
            { month: 'Jun', amount: 18 },
            { month: 'Jul', amount: 22 },
        ]
    })

    // Renderizado condicional según la pestaña activa
    const renderTabContent = () => {
        switch(activeTab) {
            case 'products':
                return (
                    <div className="tab-pane fade show active">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h3>Mis Juegos Publicados</h3>
                            <Link to="/marketplace/publish" className="btn btn-primary">
                                <i className="bi bi-plus-lg me-2"></i>Publicar Nuevo Juego
                            </Link>
                        </div>
                        
                        <div className="table-responsive">
                            <table className="table table-hover align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>Juego</th>
                                        <th>Precio</th>
                                        <th>Estado</th>
                                        <th>Estadísticas</th>
                                        <th>Estado</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(product => (
                                        <tr key={product.id}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src={product.image} alt={product.title} className="rounded me-3" width="50" height="50" />
                                                    <div>
                                                        <h6 className="mb-0">{product.title}</h6>
                                                        <small className="text-muted">{product.condition}</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-bold">${product.price.toLocaleString('es-CL')} CLP</span>
                                            </td>
                                            <td>
                                                <div className="d-flex gap-2">
                                                    <div>
                                                        <small className="d-block text-muted">Vistas</small>
                                                        <span>{product.views}</span>
                                                    </div>
                                                    <div>
                                                        <small className="d-block text-muted">Favoritos</small>
                                                        <span>{product.favorites}</span>
                                                    </div>
                                                    <div>
                                                        <small className="d-block text-muted">Mensajes</small>
                                                        <span>{product.messages}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {product.status === 'active' && <span className="badge bg-success">Activo</span>}
                                                {product.status === 'sold' && <span className="badge bg-primary">Vendido</span>}
                                                {product.status === 'inactive' && <span className="badge bg-secondary">Inactivo</span>}
                                            </td>
                                            <td>
                                                <div className="btn-group">
                                                    <button className="btn btn-sm btn-outline-secondary">
                                                        <i className="bi bi-pencil"></i>
                                                    </button>
                                                    <button className="btn btn-sm btn-outline-danger">
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                    <Link to={`/marketplace/product/${product.id}`} className="btn btn-sm btn-outline-primary">
                                                        <i className="bi bi-eye"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            case 'orders':
                return (
                    <div className="tab-pane fade show active">
                        <h3 className="mb-4">Mis Ventas</h3>
                        
                        <div className="table-responsive">
                            <table className="table table-hover align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>ID</th>
                                        <th>Producto</th>
                                        <th>Comprador</th>
                                        <th>Fecha</th>
                                        <th>Precio</th>
                                        <th>Estado</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map(order => (
                                        <tr key={order.id}>
                                            <td>#{order.id}</td>
                                            <td>{order.product}</td>
                                            <td>{order.buyer}</td>
                                            <td>{order.date}</td>
                                            <td>${order.price.toLocaleString('es-CL')} CLP</td>
                                            <td>
                                                {order.status === 'completed' && <span className="badge bg-success">Completado</span>}
                                                {order.status === 'shipped' && <span className="badge bg-info">Enviado</span>}
                                                {order.status === 'pending' && <span className="badge bg-warning">Pendiente</span>}
                                            </td>
                                            <td>
                                                <button className="btn btn-sm btn-outline-primary">
                                                    <i className="bi bi-info-circle me-1"></i>Detalles
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            case 'messages':
                return (
                    <div className="tab-pane fade show active">
                        <h3 className="mb-4">Mensajes</h3>
                        
                        <div className="list-group">
                            {messages.map(message => (
                                <div key={message.id} className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${!message.read ? 'bg-light' : ''}`}>
                                    <div>
                                        <div className="d-flex align-items-center">
                                            <h6 className="mb-0">{message.from}</h6>
                                            {!message.read && <span className="badge bg-primary ms-2">Nuevo</span>}
                                        </div>
                                        <p className="mb-1">{message.subject}</p>
                                        <small className="text-muted">{message.date}</small>
                                    </div>
                                    <div>
                                        <Link to="/marketplace/messages" className="btn btn-sm btn-outline-primary">
                                            <i className="bi bi-chat-dots me-1"></i>Responder
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            case 'earnings':
                return (
                    <div className="tab-pane fade show active">
                        <h3 className="mb-4">Mis Ganancias</h3>
                        
                        <div className="row mb-4">
                            <div className="col-md-6 col-lg-3 mb-3">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h6 className="card-subtitle mb-2 text-muted">Ganancias Totales</h6>
                                        <h3 className="card-title">${earnings.total.toLocaleString('es-CL')} CLP</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 mb-3">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h6 className="card-subtitle mb-2 text-muted">Pendiente de Cobro</h6>
                                        <h3 className="card-title">${earnings.pending.toLocaleString('es-CL')} CLP</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 mb-3">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h6 className="card-subtitle mb-2 text-muted">Juegos Vendidos</h6>
                                        <h3 className="card-title">3</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 mb-3">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h6 className="card-subtitle mb-2 text-muted">Valoración Media</h6>
                                        <h3 className="card-title">4.8 <small className="text-muted">/ 5</small></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card">
                            <div className="card-header bg-white">
                                <h5 className="mb-0">Ganancias Mensuales</h5>
                            </div>
                            <div className="card-body">
                                <div className="chart-container" style={{ height: '300px' }}>
                                    <div className="d-flex justify-content-between h-100 align-items-end">
                                        {earnings.monthly.map((month, index) => (
                                            <div key={index} className="d-flex flex-column align-items-center" style={{ width: `${100 / earnings.monthly.length}%` }}>
                                                <div 
                                                    className="bg-primary rounded-top" 
                                                    style={{ 
                                                        width: '80%', 
                                                        height: `${(month.amount / Math.max(...earnings.monthly.map(m => m.amount))) * 200}px`,
                                                        minHeight: '5px'
                                                    }}
                                                ></div>
                                                <div className="mt-2 text-center">
                                                    <small>{month.month}</small>
                                                    <div><small className="text-muted">{month.amount > 0 ? `$${month.amount.toLocaleString('es-CL')} CLP` : '-'}</small></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <div className="container py-5">
            <div className="row mb-4">
                <div className="col-12">
                    <h1 className="mb-4">Panel de Vendedor</h1>
                    
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src="https://via.placeholder.com/100x100" alt="Foto de perfil" className="rounded-circle" width="80" height="80" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h4 className="mb-1">Juan Pérez</h4>
                                    <p className="text-muted mb-2">Vendedor desde Junio 2023</p>
                                    <div className="d-flex align-items-center">
                                        <div className="me-3">
                                            <i className="bi bi-star-fill text-warning me-1"></i>
                                            <span>4.8</span>
                                            <small className="text-muted">(12 valoraciones)</small>
                                        </div>
                                        <div>
                                            <i className="bi bi-geo-alt me-1"></i>
                                            <span>Madrid, España</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ms-auto">
                                    <button className="btn btn-outline-primary">
                                        <i className="bi bi-pencil me-2"></i>Editar Perfil
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-12">
                    <ul className="nav nav-tabs mb-4">
                        <li className="nav-item">
                            <button 
                                className={`nav-link ${activeTab === 'products' ? 'active' : ''}`}
                                onClick={() => setActiveTab('products')}
                            >
                                <i className="bi bi-grid me-2"></i>Mis Juegos
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                className={`nav-link ${activeTab === 'orders' ? 'active' : ''}`}
                                onClick={() => setActiveTab('orders')}
                            >
                                <i className="bi bi-bag me-2"></i>Ventas
                                <span className="badge bg-primary ms-2">3</span>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                className={`nav-link ${activeTab === 'messages' ? 'active' : ''}`}
                                onClick={() => setActiveTab('messages')}
                            >
                                <i className="bi bi-chat me-2"></i>Mensajes
                                <span className="badge bg-danger ms-2">2</span>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                className={`nav-link ${activeTab === 'earnings' ? 'active' : ''}`}
                                onClick={() => setActiveTab('earnings')}
                            >
                                <i className="bi bi-cash-coin me-2"></i>Ganancias
                            </button>
                        </li>
                    </ul>
                    
                    {renderTabContent()}
                </div>
            </div>
        </div>
    )
}