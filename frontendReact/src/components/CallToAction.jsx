export default function CallToAction() {
  return (
    <section className="py-5 bg-primary text-white" id="cta">
      <div className="container py-4">
        <div className="row align-items-center g-4">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="fw-bold mb-4">¿Listo para unirte a la comunidad PORTURNOS?</h2>
            <p className="lead mb-4">Regístrate ahora y obtén un 10% de descuento en tu primera compra. Además, accede a ofertas exclusivas, eventos y mucho más.</p>
            <div className="d-flex justify-content-center gap-3">
              <a href="/register" className="btn btn-warning btn-lg">Registrarse</a>
              <a href="/login" className="btn btn-outline-light btn-lg">Iniciar sesión</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}