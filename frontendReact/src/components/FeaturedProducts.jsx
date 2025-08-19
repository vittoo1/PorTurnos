export default function FeaturedProducts() {
  // Datos de ejemplo para productos destacados
  const featuredProducts = [
    {
      id: 1,
      name: "Catan",
      description: "El clásico juego de estrategia y comercio",
      price: 27500,
      image: "https://placehold.co/300x300/e9ecef/495057?text=Catan",
      category: "Estrategia"
    },
    {
      id: 2,
      name: "Pandemic",
      description: "Coopera para salvar al mundo de una pandemia global",
      price: 24000,
      image: "https://placehold.co/300x300/e9ecef/495057?text=Pandemic",
      category: "Cooperativo"
    },
    {
      id: 3,
      name: "Magic: The Gathering",
      description: "El juego de cartas coleccionables más popular",
      price: 18000,
      image: "https://placehold.co/300x300/e9ecef/495057?text=Magic",
      category: "Cartas"
    },
    {
      id: 4,
      name: "Gloomhaven",
      description: "Aventura épica de mazmorras y combate táctico",
      price: 78000,
      image: "https://placehold.co/300x300/e9ecef/495057?text=Gloomhaven",
      category: "Rol"
    }
  ];

  return (
    <section className="py-5 bg-light" id="productos">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Productos Destacados</h2>
          <p className="lead text-secondary">Los juegos más populares de nuestra tienda</p>
        </div>
        
        <div className="row g-4">
          {featuredProducts.map(product => (
            <div className="col-md-6 col-lg-3" key={product.id}>
              <div className="card h-100 border-0 shadow-sm product-card">
                <div className="position-relative">
                  <img src={product.image} className="card-img-top" alt={product.name} />
                  <span className="position-absolute top-0 end-0 badge bg-primary m-2">{product.category}</span>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text flex-grow-1">{product.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="fw-bold text-primary">${product.price.toLocaleString('es-CL')} CLP</span>
                    <button className="btn btn-sm btn-outline-primary">Añadir al carrito</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <a href="#" className="btn btn-primary btn-lg">Ver todos los productos</a>
        </div>
      </div>
    </section>
  )
}