export default function Hero() {
  return (
      <section className="bg-primary text-white py-5 border-bottom">
        <div className="container py-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold">Bienvenido a <span className="text-warning">PORTURNOS</span></h1>
              <p className="lead mb-4">Tu tienda de juegos de mesa por turnos. Encuentra los mejores juegos de estrategia, rol y cartas coleccionables.</p>
              <div className="d-flex gap-3">
                <a href="#productos" className="btn btn-warning btn-lg">Explorar productos</a>
                <a href="#nosotros" className="btn btn-outline-light btn-lg">Conoce más</a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="rounded-4 bg-white p-4 text-center shadow-lg">
                <div className="display-3 mb-3">🎲 🎮 🎯</div>
                <p className="text-dark fw-bold mb-0">En Por Turnos, creemos que cada juego merece una segunda partida</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
