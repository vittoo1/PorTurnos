import { Link } from 'react-router-dom'

export default function MarketplacePromo() {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="p-4 bg-white rounded-4 shadow-sm">
                            <h2 className="display-6 fw-bold mb-3">Marketplace de Juegos Usados</h2>
                            <p className="lead mb-4">
                                Compra y vende juegos de mesa de segunda mano en nuestra comunidad. 
                                Encuentra ofertas increíbles o dale una segunda vida a tus juegos.
                            </p>
                            <div className="d-flex gap-3 flex-wrap">
                                <Link to="/marketplace" className="btn btn-primary btn-lg">
                                    Explorar Marketplace
                                </Link>
                                <Link to="/marketplace/publish" className="btn btn-outline-primary btn-lg">
                                    Vender mi Juego
                                </Link>
                            </div>
                            <div className="mt-4 d-flex gap-4">
                                <div>
                                    <span className="d-block h3 mb-0 fw-bold">500+</span>
                                    <small className="text-muted">Juegos disponibles</small>
                                </div>
                                <div>
                                    <span className="d-block h3 mb-0 fw-bold">300+</span>
                                    <small className="text-muted">Vendedores activos</small>
                                </div>
                                <div>
                                    <span className="d-block h3 mb-0 fw-bold">1000+</span>
                                    <small className="text-muted">Transacciones exitosas</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="position-relative">
                            <div className="bg-primary rounded-4 p-3 position-absolute" style={{ top: '15%', left: '10%', zIndex: 1, transform: 'rotate(-5deg)' }}>
                                <div className="bg-white rounded-3 p-2">
                                    <img src="https://via.placeholder.com/120x120" alt="Juego de mesa" className="rounded-3" />
                                    <div className="mt-2 text-center">
                                        <span className="badge bg-success">Casi nuevo</span>
                                        <h6 className="mb-0 mt-1">Catan</h6>
                                        <p className="mb-0"><strong>$15.000 CLP</strong> <del className="text-muted">$25.000 CLP</del></p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-success rounded-4 p-3 position-absolute" style={{ top: '5%', right: '15%', zIndex: 2, transform: 'rotate(3deg)' }}>
                                <div className="bg-white rounded-3 p-2">
                                    <img src="https://via.placeholder.com/120x120" alt="Juego de mesa" className="rounded-3" />
                                    <div className="mt-2 text-center">
                                        <span className="badge bg-warning">Buen estado</span>
                                        <h6 className="mb-0 mt-1">Dixit</h6>
                                        <p className="mb-0"><strong>$12.000 CLP</strong> <del className="text-muted">$20.000 CLP</del></p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-warning rounded-4 p-3 ms-auto" style={{ maxWidth: '80%', zIndex: 0 }}>
                                <div className="bg-white rounded-3 p-2">
                                    <img src="https://via.placeholder.com/200x200" alt="Juego de mesa" className="rounded-3" />
                                    <div className="mt-2 text-center">
                                        <span className="badge bg-info">Como nuevo</span>
                                        <h6 className="mb-0 mt-1">Pandemic</h6>
                                        <p className="mb-0"><strong>$18.000 CLP</strong> <del className="text-muted">$30.000 CLP</del></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}