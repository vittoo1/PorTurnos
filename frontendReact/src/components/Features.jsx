export default function Features() {
  return (
    <section className="py-5" id="features">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold">¿Por qué elegir PORTURNOS?</h2>
          <p className="lead text-secondary">Descubre las ventajas de comprar en nuestra tienda especializada</p>
        </div>
        
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="feature-icon bg-primary bg-gradient text-white rounded-circle mb-3">
                  <i className="bi bi-collection fs-2 p-3"></i>
                </div>
                <h5 className="card-title">Amplio Catálogo</h5>
                <p className="card-text">Más de 500 juegos de mesa por turnos, desde clásicos hasta las últimas novedades.</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="feature-icon bg-primary bg-gradient text-white rounded-circle mb-3">
                  <i className="bi bi-shield-check fs-2 p-3"></i>
                </div>
                <h5 className="card-title">Garantía Total</h5>
                <p className="card-text">Todos nuestros productos tienen garantía de 30 días. Tu satisfacción es nuestra prioridad.</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="feature-icon bg-primary bg-gradient text-white rounded-circle mb-3">
                  <i className="bi bi-people fs-2 p-3"></i>
                </div>
                <h5 className="card-title">Comunidad Activa</h5>
                <p className="card-text">Únete a nuestra comunidad de jugadores y participa en torneos y eventos exclusivos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}