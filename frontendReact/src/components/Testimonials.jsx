export default function Testimonials() {
  // Datos de ejemplo para testimonios
  const testimonials = [
    {
      id: 1,
      name: "Laura Martínez",
      role: "Jugadora habitual",
      content: "PORTURNOS ha cambiado mi forma de comprar juegos de mesa. Su catálogo es impresionante y el servicio al cliente es excepcional. ¡Totalmente recomendado!",
      avatar: "https://placehold.co/100x100/e9ecef/495057?text=LM"
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      role: "Coleccionista",
      content: "Como coleccionista de juegos de estrategia, valoro mucho la calidad y autenticidad de los productos. PORTURNOS siempre cumple con mis expectativas.",
      avatar: "https://placehold.co/100x100/e9ecef/495057?text=CR"
    },
    {
      id: 3,
      name: "Ana Gómez",
      role: "Organizadora de eventos",
      content: "Organizo eventos de juegos de mesa y PORTURNOS es mi proveedor de confianza. Precios competitivos y envíos puntuales. ¡No puedo pedir más!",
      avatar: "https://placehold.co/100x100/e9ecef/495057?text=AG"
    }
  ];

  return (
    <section className="py-5" id="testimonios">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Lo que dicen nuestros clientes</h2>
          <p className="lead text-secondary">Experiencias reales de la comunidad PORTURNOS</p>
        </div>
        
        <div className="row g-4">
          {testimonials.map(testimonial => (
            <div className="col-md-4" key={testimonial.id}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-warning me-1"></i>
                    ))}
                  </div>
                  <p className="card-text mb-4">"{testimonial.content}"</p>
                  <div className="d-flex align-items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="rounded-circle me-3" 
                      width="50" 
                      height="50" 
                    />
                    <div>
                      <h6 className="mb-0">{testimonial.name}</h6>
                      <small className="text-secondary">{testimonial.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}