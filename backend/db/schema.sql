-- =====================================================
-- E-COMMERCE C2C DE JUEGOS DE MESA - "POR TURNOS"
-- Base de Datos: MySQL
-- Descripción: Esquema de base de datos para clientes, productos y blog
-- =====================================================

-- Crear base de datos
DROP DATABASE IF EXISTS por_turnos;
CREATE DATABASE por_turnos;
USE por_turnos;

-- =====================================
-- TABLA: clientes
-- =====================================
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rut VARCHAR(12) NOT NULL UNIQUE,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL, 
    email VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(20),
    direccion TEXT,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================
-- TABLA: productos
-- =====================================
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    titulo VARCHAR(120) NOT NULL,
    descripcion TEXT NOT NULL,
    imagen TEXT, -- Aquí va la URL de la imagen
    precio DECIMAL(10,2) NOT NULL CHECK (precio >= 0),
    estado ENUM('nuevo', 'semi_nuevo', 'usado') NOT NULL DEFAULT 'usado',
    disponibilidad ENUM('disponible', 'vendido', 'pausado') NOT NULL DEFAULT 'disponible',
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- =====================================
-- TABLA: entradas_blog
-- =====================================
CREATE TABLE entradas_blog (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    contenido TEXT NOT NULL,
    autor VARCHAR(200) NOT NULL,
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    publicado BOOLEAN DEFAULT TRUE
);

-- =====================================
-- TABLA: puntuaciones
-- =====================================
CREATE TABLE puntuaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    comprador_id INT NOT NULL,
    vendedor_id INT NOT NULL,
    producto_id INT NOT NULL,
    puntuacion INT CHECK (puntuacion BETWEEN 1 AND 5),
    comentario TEXT,
    fecha_puntuacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (comprador_id) REFERENCES clientes(id), -- El cliente que compra
    FOREIGN KEY (vendedor_id) REFERENCES clientes(id), -- El cliente que vendió
    FOREIGN KEY (producto_id) REFERENCES productos(id) -- El cliente que aún no ha vendido
);

-- =====================================
-- INDICES RELEVANTES
-- =====================================
CREATE INDEX idx_productos_estado ON productos(estado);
CREATE INDEX idx_productos_disponibilidad ON productos(disponibilidad);
CREATE INDEX idx_productos_cliente ON productos(cliente_id);
CREATE INDEX idx_blog_fecha ON entradas_blog(fecha_publicacion);

-- =====================================
-- VISTA: Productos disponibles con nombre del vendedor
-- =====================================
CREATE OR REPLACE VIEW vista_productos_disponibles AS
SELECT 
    p.id,
    p.titulo,
    p.precio,
    p.estado,
    CONCAT(c.nombres, ' ', c.apellidos) AS vendedor
FROM productos p
JOIN clientes c ON p.cliente_id = c.id
WHERE p.disponibilidad = 'disponible';

-- =====================================
-- COMENTARIOS FINALES
-- =====================================
/*
- Los clientes pueden ser compradores o vendedores según el contexto.
- Puedes agregar más tablas como categorías, transacciones, favoritos, etc.
- Se usa ENUM para estado y disponibilidad de productos para mantener opciones controladas.
*/
