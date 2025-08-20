import { Routes, Route, Outlet } from 'react-router-dom'
import Header from './modules/layouts/Header.jsx'
import Footer from './modules/layouts/Footer.jsx'
import Home from './modules/home/pages/Home.jsx'
import Blog from './modules/blogs/components/Blog.jsx'
import Post from './modules/blogs/pages/Post.jsx'
//Al añadir nuevas páginas se deben importar
// Así como sus <Route path = .../>
import Login from './modules/auth/components/Login.jsx'
import Register from './modules/auth/components/Register.jsx'
import ResetPassword from './modules/auth/components/ResetPassword.jsx'
import Nosotros from "./modules/info/Nosotros.jsx"
import Contacto from "./modules/info/Contacto.jsx"
import Envios  from './modules/info/Envios.jsx'
import Terminos from './modules/info/Terminos.jsx'
import Conducta from './modules/info/Conducta.jsx'
import Privacidad from './modules/info/Privacidad.jsx'
// Importaciones del marketplace
import Marketplace from './modules/marketplace/pages/Marketplace.jsx'
import ProductDetail from './modules/product/pages/ProductDetail.jsx'
import PublishGameForm from './modules/seller/components/PublishGameForm.jsx'
import MessageSystem from './modules/marketplace/components/MessageSystem.jsx'
import SellerDashboard from './modules/seller/pages/sellerDashboard.jsx'
import NotificationsPage from './modules/layouts/notifications/pages/NotificationsPage.jsx'

export default function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            <main className="flex-grow-1">
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:slug" element={<Post />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/reset-password" element={<ResetPassword />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/nosotros" element={<Nosotros />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="/envios" element={<Envios />} />
                        <Route path="/terminos" element={<Terminos />} />
                        <Route path="/conducta" element={<Conducta />} />
                        <Route path="/privacidad" element={<Privacidad />} />
                        {/* Rutas del marketplace */}
                        <Route path="/marketplace" element={<Marketplace />} />
                        <Route path="/marketplace/product/:productId" element={<ProductDetail />} />
                        <Route path="/marketplace/publish" element={<PublishGameForm />} />
                        <Route path="/marketplace/messages" element={<MessageSystem />} />
                        <Route path="/marketplace/seller-dashboard" element={<SellerDashboard />} />
                        <Route path="/marketplace/notifications" element={<NotificationsPage />} />
                    </Route>
                </Routes>
            </main>

            <Footer />
        </div>
    )
}

function Layout() {
    return <Outlet />
}