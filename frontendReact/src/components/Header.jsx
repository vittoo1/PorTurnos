// src/components/Header.jsx
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/img/LogoPorTurnos.png'

export default function Header() {
    return (
        <header className="pt-header shadow-sm">
            <div className="container py-2">
                {/* Fila 1: Logo + Buscador + Usuario */}
                <div className="row align-items-center">
                    <div className="col-auto">
                        <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none">
                            <img src={logo} alt="Logo Por Turnos" height="80" />
                        </Link>
                    </div>

                    <div className="col">
                        <form role="search" onSubmit={(e) => e.preventDefault()}>
                            <div className="input-group pt-search">
                                <input className="form-control" type="search" placeholder="Buscar juegos o artículos…" aria-label="Buscar" />
                                <button className="btn btn-outline-dark" type="submit">
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="col-auto d-none d-md-block">
                        <a href="#" className="btn btn-usuario rounded-3 px-3">Juan Pérez</a>
                    </div>
                </div>

                {/* Fila 2: Subnavbar */}
                <div className="row mt-2">
                    <div className="col">
                        <nav className="pt-subnav d-flex flex-wrap gap-3">
                            <a href="#" className="pt-navlink">Categorías</a>
                            <a href="#" className="pt-navlink">Ofertas</a>
                            <a href="#" className="pt-navlink">Vender</a>
                            <a href="#" className="pt-navlink">Ayuda</a>

                            <span className="flex-grow-1"></span>

                            <a href="#" className="pt-navlink">Ver cuenta</a>
                            <NavLink className="pt-navlink" to="/blog">Blog</NavLink>
                            <a href="#" className="pt-navlink">Mis compras</a>

                            {/* Solo LOGIN aquí */}
                            <NavLink className="pt-navlink" to="/login">Login</NavLink>

                            <a href="#" className="pt-navlink" aria-label="Carrito">
                                <i className="bi bi-cart3"></i>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
