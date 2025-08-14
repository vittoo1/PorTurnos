// src/pages/Register.jsx
import { NavLink } from 'react-router-dom'
import React from 'react'

export default function Register() {
    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO: llamada a tu API de registro
    }

    return (
        <section className="py-4">
            <div className="container">
                <article className="blog-juegos p-3 rounded-3">
                    <div className="row justify-content-center">
                        <div className="col-md-7 col-lg-6">
                            <div className="auth-card">
                                <div className="text-center mb-3">
                                    <i className="bi bi-person-plus-fill fs-1 text-rosa"></i>
                                    <h2 className="mt-2 gradient-title">Regístrate</h2>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="fullName" className="form-label">Nombre completo</label>
                                        <input type="text" className="form-control" id="fullName" name="fullName" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                                        <input type="email" className="form-control" id="email" name="email" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Contraseña</label>
                                        <input type="password" className="form-control" id="password" name="password" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">Repite la contraseña</label>
                                        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" required />
                                    </div>

                                    <div className="form-check mb-3">
                                        <input type="checkbox" className="form-check-input" id="terms" name="terms" required />
                                        <label className="form-check-label" htmlFor="terms">Acepto los términos y condiciones</label>
                                    </div>

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-outline-dark btn-rosa">Registrarme</button>
                                    </div>
                                </form>

                                <p className="text-center mt-3 mb-0 small">
                                    ¿Ya tienes cuenta?{' '}
                                    <NavLink to="/login" className="link-primary fw-semibold">Inicia sesión</NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}
