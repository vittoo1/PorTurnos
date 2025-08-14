import React from 'react'

export default function Nosotros() {
    return (
        <section className="py-4">
            <div className="container">
                <article className="blog-juegos p-3 rounded-3">
                    <header className="mb-3 text-center">
                        <h1 className="gradient-title m-0">Nosotros</h1>
                        <p className="text-muted m-0">Conoce el equipo y lo que hacemos en Por Turnos</p>
                    </header>

                    {/* Quiénes somos / basado en Términos */}
                    <section className="mb-4">
                        <h2 className="h5">Qué es Por Turnos</h2>
                        <p className="mb-2">
                            Por Turnos es una plataforma chilena C2C (consumer-to-consumer) enfocada en la compra, venta y arriendo
                            de juegos de mesa nuevos y usados. Conectamos personas y facilitamos las transacciones con herramientas de
                            pago, envío y garantías.
                        </p>
                        <ul className="mb-0">
                            <li>Intermediamos de forma segura entre quienes publican y quienes compran o arriendan.</li>
                            <li>Cada persona usuaria es responsable de su cuenta y de los productos que publica o adquiere.</li>
                            <li>Operamos bajo la legislación chilena vigente y promovemos prácticas justas y transparentes.</li>
                        </ul>
                    </section>

                    {/* Compromisos (resumen de T&C) */}
                    <section className="mb-4">
                        <h2 className="h5">Nuestros compromisos</h2>
                        <ul className="mb-0">
                            <li><strong>Calidad y respaldo:</strong> garantía legal para productos nuevos y revisión informada para usados.</li>
                            <li><strong>Privacidad:</strong> cuidamos tus datos personales conforme a nuestra política de privacidad.</li>
                            <li><strong>Confianza:</strong> intervenimos ante disputas y aplicamos medidas de seguridad cuando corresponde.</li>
                        </ul>
                    </section>

                    {/* Equipo */}
                    <section className="py-4">
                        <div className="container">
                            <h3 className="mb-3">El equipo</h3>
                            <div className="d-flex flex-wrap gap-3">
                                <div className="equipo-card azul">
                                    <strong>Angelo Grigoletti</strong>
                                </div>
                                <div className="equipo-card rosa">
                                    <strong>Natalie Duchens</strong>
                                </div>
                                <div className="equipo-card verde">
                                    <strong>Robinson Rojas</strong>
                                </div>
                                <div className="equipo-card amarillo">
                                    <strong>Kiara Iza</strong>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contacto */}
                    <section>
                        <h2 className="h5">Contacto</h2>
                        <p className="mb-0">
                            ¿Dudas o sugerencias? Escríbenos a{' '}
                            <a href="mailto:contacto@porturnos.cl">contacto@porturnos.cl</a>.
                        </p>
                    </section>
                </article>
            </div>
        </section>
    )
}
