import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilters, setActiveFilters] = useState({
    priceRange: { min: 0, max: 200 },
    condition: [],
    categories: [],
    completeness: '',
    sortBy: 'newest'
  });

  // Datos de ejemplo para juegos usados
  const sampleProducts = [
    {
      id: '1',
      title: 'Catan - Edición Básica',
      description: 'Juego de mesa de estrategia y comercio. Apenas usado, en perfecto estado.',
      price: 35.99,
      originalPrice: 49.99,
      category: 'estrategia',
      condition: 'como-nuevo',
      completeness: 'completo',
      images: ['https://placehold.co/600x400/2c3e50/ffffff?text=Catan'],
      sellerName: 'María G.',
      sellerAvatar: 'https://placehold.co/100/9b59b6/ffffff?text=MG',
      rating: 4.8,
      reviewCount: 24,
      createdAt: new Date('2023-10-15')
    },
    {
      id: '2',
      title: 'Pandemic Legacy - Temporada 1',
      description: 'Juego cooperativo. Usado para una campaña completa, algunas cartas con marcas.',
      price: 45.50,
      originalPrice: 79.99,
      category: 'cooperativos',
      condition: 'buen-estado',
      completeness: 'completo',
      images: ['https://placehold.co/600x400/3498db/ffffff?text=Pandemic'],
      sellerName: 'Carlos R.',
      sellerAvatar: 'https://placehold.co/100/e74c3c/ffffff?text=CR',
      rating: 4.5,
      reviewCount: 18,
      createdAt: new Date('2023-10-10')
    },
    {
      id: '3',
      title: 'Dixit',
      description: 'Juego de cartas e imaginación. Faltan 2 cartas, pero no afecta al juego.',
      price: 19.99,
      originalPrice: 29.99,
      category: 'familiar',
      condition: 'aceptable',
      completeness: 'falta-componentes',
      images: ['https://placehold.co/600x400/e67e22/ffffff?text=Dixit'],
      sellerName: 'Ana M.',
      sellerAvatar: 'https://placehold.co/100/27ae60/ffffff?text=AM',
      rating: 4.2,
      reviewCount: 7,
      createdAt: new Date('2023-10-05')
    },
    {
      id: '4',
      title: 'Magic: The Gathering - Lote de cartas',
      description: 'Colección de 200+ cartas de diferentes ediciones. Algunas con desgaste.',
      price: 89.99,
      originalPrice: null,
      category: 'cartas',
      condition: 'con-defectos',
      completeness: 'completo',
      images: ['https://placehold.co/600x400/8e44ad/ffffff?text=Magic'],
      sellerName: 'Pedro S.',
      sellerAvatar: 'https://placehold.co/100/f1c40f/ffffff?text=PS',
      rating: 4.9,
      reviewCount: 32,
      createdAt: new Date('2023-10-18')
    },
    {
      id: '5',
      title: 'Ticket to Ride - Europa',
      description: 'Juego de trenes. En muy buen estado, apenas usado.',
      price: 32.50,
      originalPrice: 44.99,
      category: 'estrategia',
      condition: 'como-nuevo',
      completeness: 'completo',
      images: ['https://placehold.co/600x400/c0392b/ffffff?text=Ticket+to+Ride'],
      sellerName: 'Laura B.',
      sellerAvatar: 'https://placehold.co/100/3498db/ffffff?text=LB',
      rating: 4.6,
      reviewCount: 15,
      createdAt: new Date('2023-09-30')
    },
    {
      id: '6',
      title: 'Gloomhaven',
      description: 'Juego de aventuras. Usado para media campaña, algunas miniaturas pintadas.',
      price: 95.00,
      originalPrice: 140.00,
      category: 'rol',
      condition: 'buen-estado',
      completeness: 'completo',
      images: ['https://placehold.co/600x400/34495e/ffffff?text=Gloomhaven'],
      sellerName: 'Miguel A.',
      sellerAvatar: 'https://placehold.co/100/e74c3c/ffffff?text=MA',
      rating: 4.7,
      reviewCount: 9,
      createdAt: new Date('2023-10-12')
    }
  ];

  // Simular carga de datos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Aquí iría la llamada a la API real
        // const response = await fetch('/api/products');
        // const data = await response.json();
        
        // Simulamos un delay para la carga
        await new Promise(resolve => setTimeout(resolve, 800));
        
        setProducts(sampleProducts);
        setFilteredProducts(sampleProducts);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los productos');
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  // Aplicar filtros cuando cambien
  useEffect(() => {
    if (products.length === 0) return;
    
    let result = [...products];
    
    // Filtrar por rango de precio
    result = result.filter(product => 
      product.price >= activeFilters.priceRange.min && 
      product.price <= activeFilters.priceRange.max
    );
    
    // Filtrar por condición
    if (activeFilters.condition.length > 0) {
      result = result.filter(product => 
        activeFilters.condition.includes(product.condition)
      );
    }
    
    // Filtrar por categoría
    if (activeFilters.categories.length > 0) {
      result = result.filter(product => 
        activeFilters.categories.includes(product.category)
      );
    }
    
    // Filtrar por completitud
    if (activeFilters.completeness) {
      result = result.filter(product => 
        product.completeness === activeFilters.completeness
      );
    }
    
    // Ordenar resultados
    switch (activeFilters.sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'popularity':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        break;
    }
    
    setFilteredProducts(result);
  }, [products, activeFilters]);

  // Manejar cambios en los filtros
  const handleFilterChange = (newFilters) => {
    setActiveFilters(newFilters);
  };

  return (
    <div className="container py-4">
      <div className="row">
        {/* Columna de filtros */}
        <div className="col-lg-3 mb-4 mb-lg-0">
          <ProductFilters onFilterChange={handleFilterChange} />
        </div>
        
        {/* Columna de productos */}
        <div className="col-lg-9">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
              <p className="mt-2">Cargando juegos...</p>
            </div>
          ) : error ? (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-search display-1 text-muted"></i>
              <h4 className="mt-3">No se encontraron juegos</h4>
              <p className="text-muted">Prueba a cambiar los filtros de búsqueda</p>
            </div>
          ) : (
            <>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <p className="mb-0">Mostrando {filteredProducts.length} juegos</p>
                <div className="d-flex align-items-center">
                  <span className="me-2">Vista:</span>
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-outline-primary active">
                      <i className="bi bi-grid-3x3-gap"></i>
                    </button>
                    <button type="button" className="btn btn-outline-primary">
                      <i className="bi bi-list"></i>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {filteredProducts.map(product => (
                  <div className="col" key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}