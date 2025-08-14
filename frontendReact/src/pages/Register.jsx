import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Register() {
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)

        // Armamos el payload con los NOMBRES que tu backend espera
        const payload = {
            rut: form.get('rut'),
            nombres: form.get('nombres'),
            apellidos: form.get('apellidos'),
            email: form.get('email'),
            password: form.get('password'),
            telefono: form.get('telefono') || null,
            direccion: form.get('direccion')
            // fechaRegistro / enabled / roles: los maneja el backend
        }

        // TODO: reemplaza por tu llamada real (fetch/axios)
        console.log('Registro (payload):', payload)
    }

    return (
        <section className="py-4">
            <div className="container">
                {/* mismo “marco” que el blog */}
                <article className="blog-juegos p-3 rounded-3">
                    <div className="row justify-content-center">
                        <div className="col-md-7 col-lg-6">
                            <div className="auth-card">
                                <div className="text-center mb-3">
                                    <i className="bi bi-person-plus-fill fs-1 text-rosa"></i>
                                    <h2 className="mt-2 gradient-title">Regístrate</h2>
                                </div>

                                <form onSubmit={handleSubmit} noValidate>
                                    {/* RUT */}
                                    <div className="mb-3">
                                        <label htmlFor="rut" className="form-label">RUT</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="rut"
                                            name="rut"
                                            placeholder="12.345.678-9"
                                            maxLength={12}
                                            // Validación simple; puedes mejorarla con una función de DV
                                            pattern="^[0-9kK.\-]+$"
                                            required
                                        />
                                        <div className="form-text">Formato aceptado: 12.345.678-9 (puede incluir puntos y guion)</div>
                                    </div>

                                    {/* Nombres */}
                                    <div className="mb-3">
                                        <label htmlFor="nombres" className="form-label">Nombres</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nombres"
                                            name="nombres"
                                            maxLength={100}
                                            required
                                        />
                                    </div>

                                    {/* Apellidos */}
                                    <div className="mb-3">
                                        <label htmlFor="apellidos" className="form-label">Apellidos</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="apellidos"
                                            name="apellidos"
                                            maxLength={100}
                                            required
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            maxLength={100}
                                            placeholder="nombre@ejemplo.com"
                                            required
                                        />
                                    </div>

                                    {/* Teléfono (opcional) */}
                                    <div className="mb-3">
                                        <label htmlFor="telefono" className="form-label">Teléfono (opcional)</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="telefono"
                                            name="telefono"
                                            maxLength={20}
                                            placeholder="+56 9 1234 5678"
                                        />
                                    </div>

                                    {/* Dirección */}
                                    <div className="mb-3">
                                        <label htmlFor="direccion" className="form-label">Dirección</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="direccion"
                                            name="direccion"
                                            maxLength={255}
                                            required
                                        />
                                    </div>

                                    {/* Password + Confirmación */}
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Contraseña</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            minLength={8}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">Repite la contraseña</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            minLength={8}
                                            required
                                        />
                                    </div>

                                    {/* Términos */}
                                    <div className="form-check mb-3">
                                        <input type="checkbox" className="form-check-input" id="terms" required />
                                        <label className="form-check-label" htmlFor="terms">
                                            Acepto los términos y condiciones
                                        </label>
                                    </div>

                                    {/* Botón (usa tu estilo rosa) */}
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-outline-dark btn-rosa">
                                            Registrarme
                                        </button>
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

