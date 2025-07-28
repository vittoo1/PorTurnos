-- =====================================================
-- E-COMMERCE C2C DE JUEGOS DE MESA - "POR TURNOS"
-- Base de Datos: PostgreSQL
-- Descripción: Esquema de base de datos para clientes, productos y blog
-- =====================================================

-- =====================================
-- EXTENSIONES NECESARIAS
-- =====================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================
-- TABLA: clientes
-- =====================================
CREATE TABLE clientes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(20),
    direccion TEXT,
    fecha_registro TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- =====================================
-- TABLA: productos
-- =====================================
CREATE TYPE estado_producto AS ENUM (
    'nuevo',
    'semi_nuevo',
    'semi_usado',
    'usado',
);

CREATE TYPE disponibilidad_producto AS ENUM (
    'disponible',
    'vendido',
    'pausado'
);

CREATE TABLE productos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    titulo VARCHAR(150) NOT NULL,
    descripcion TEXT,
    precio NUMERIC(10,2) NOT NULL CHECK (precio >= 0),
    estado estado_producto NOT NULL DEFAULT 'usado',
    disponibilidad disponibilidad_producto DEFAULT 'disponible',
    cliente_id UUID NOT NULL REFERENCES clientes(id),
    fecha_publicacion TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);


-- =====================================
-- TABLA: blog
-- =====================================
CREATE TABLE entradas_blog (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    contenido TEXT NOT NULL,
    autor VARCHAR(100),
    fecha_publicacion TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    publicado BOOLEAN DEFAULT TRUE
);

-- =====================================
-- INDICES RELEVANTES
-- =====================================
CREATE INDEX idx_productos_estado ON productos(estado);
CREATE INDEX idx_productos_cliente ON productos(cliente_id);
CREATE INDEX idx_blog_fecha ON entradas_blog(fecha_publicacion);

-- =====================================
-- VISTAS ÚTILES
-- =====================================
CREATE OR REPLACE VIEW vista_productos_disponibles AS
SELECT 
    p.id,
    p.titulo,
    p.precio,
    p.estado,
    c.nombre AS vendedor
FROM productos p
JOIN clientes c ON p.cliente_id = c.id
WHERE p.disponibilidad = 'disponible';

-- =====================================
-- COMENTARIOS FINALES
-- =====================================
/*
- Esta base de datos está diseñada para un modelo C2C sencillo y escalable.
- Se pueden extender entidades como "categorías", "rentas", "comentarios", "transacciones", etc.
- Las entradas del blog sirven como estrategia de contenido y SEO para atraer público.
- Los productos se asocian directamente a un cliente (vendedor).
*/
