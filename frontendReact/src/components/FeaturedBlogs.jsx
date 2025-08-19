import { Link } from 'react-router-dom';

export default function FeaturedBlogs() {
  // Datos de ejemplo para los blogs destacados
  const featuredBlogs = [
    {
      id: 1,
      title: "Los 5 mejores juegos de estrategia para principiantes",
      excerpt: "Descubre los juegos de mesa perfectos para iniciarte en el mundo de la estrategia sin complicaciones.",
      image: "https://placehold.co/600x400/2c3e50/ffffff?text=Estrategia+Principiantes",
      date: "15 Oct 2023",
      author: "María García",
      slug: "mejores-juegos-estrategia-principiantes",
      category: "Estrategia"
    },
    {
      id: 2,
      title: "Guía completa: Cómo organizar un torneo de Magic",
      excerpt: "Todo lo que necesitas saber para organizar un torneo exitoso de Magic: The Gathering en tu comunidad local.",
      image: "https://placehold.co/600x400/8e44ad/ffffff?text=Torneo+Magic",
      date: "28 Sep 2023",
      author: "Carlos Rodríguez",
      slug: "guia-organizar-torneo-magic",
      category: "Cartas"
    },
    {
      id: 3,
      title: "Juegos cooperativos: Fortaleciendo lazos familiares",
      excerpt: "Cómo los juegos cooperativos pueden mejorar la comunicación y fortalecer las relaciones familiares.",
      image: "https://placehold.co/600x400/27ae60/ffffff?text=Juegos+Cooperativos",
      date: "05 Oct 2023",
      author: "Ana Martínez",
      slug: "juegos-cooperativos-familia",
      category: "Familia"
    }
  ];

  return (
    <section className="py-5 bg-light" id="blog-section">
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h2 className="fw-bold mb-1">Blog PORTURNOS</h2>
            <p className="lead text-secondary">Artículos, guías y noticias del mundo de los juegos</p>
          </div>
          <Link to="/blog" className="btn btn-outline-primary">Ver todos los artículos</Link>
        </div>
        
        <div className="row g-4">
          {featuredBlogs.map(blog => (
            <div className="col-md-4" key={blog.id}>
              <div className="card h-100 border-0 shadow-sm blog-card">
                <div className="position-relative">
                  <img 
                    src={blog.image} 
                    className="card-img-top" 
                    alt={blog.title} 
                  />
                  <span className="position-absolute top-0 end-0 badge bg-primary m-2">{blog.category}</span>
                </div>
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-2 small text-secondary">
                    <span><i className="bi bi-calendar3 me-1"></i> {blog.date}</span>
                    <span><i className="bi bi-person me-1"></i> {blog.author}</span>
                  </div>
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text flex-grow-1">{blog.excerpt}</p>
                  <Link to={`/blog/${blog.slug}`} className="btn btn-sm btn-outline-primary mt-3">
                    Leer artículo <i className="bi bi-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <div className="d-inline-block bg-white p-3 rounded-3 shadow-sm">
            <p className="mb-2 fw-bold">¿Quieres estar al día con las últimas novedades?</p>
            <Link to="/blog" className="btn btn-primary">
              Suscríbete a nuestro blog <i className="bi bi-journal-text ms-1"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}