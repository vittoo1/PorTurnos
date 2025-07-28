# 🧩 Base de Datos - E-commerce C2C "Por Turnos"

## Contexto del Proyecto

**Por Turnos** es una plataforma de comercio electrónico C2C (consumer-to-consumer) especializada en juegos de mesa nuevos y usados. En este marketplace, los usuarios pueden vender, comprar, arrendar y revender juegos de forma segura, fomentando una comunidad lúdica. Además, la plataforma contará con un blog con artículos sobre juegos, reseñas y consejos de compra.

---

## Objetivos de la Base de Datos

- Gestionar la información de los usuarios (clientes/vendedores).
- Registrar y administrar productos (juegos).
- Controlar las transacciones de venta y arriendo.
- Organizar publicaciones del blog y sus autores.
- Facilitar la consulta eficiente de productos, usuarios y contenido del blog.

---

## Entidades Principales

### 👤 CLIENTES

- ID del cliente (PK)
- Nombre completo
- Email (UNIQUE)
- Contraseña cifrada
- Dirección (para envíos)
- Teléfono
- Fecha de registro
- Rol (comprador, vendedor, admin)
- Estado de la cuenta (activo, suspendido, eliminado)

### 🎲 PRODUCTOS (JUEGOS)

- ID del producto (PK)
- Nombre del juego
- Descripción
- Año de publicación
- Estado (nuevo, usado, abierto sin uso, etc.)
- Precio venta
- Precio arriendo
- Tipo de transacción (venta, arriendo, ambos)
- Condición del producto
- ID del cliente vendedor  (FK) → CLIENTE
- Fecha de publicación
- Categoría (estrategia, party game, cooperativo, etc.)
- Imágenes

### 💳 TRANSACCIONES

- ID de transacción (PK)
- Tipo (compra, arriendo)
- ID producto (FK) → PRODUCTO
- ID comprador  (FK) → CLIENTE
- ID vendedor (FK) → CLIENTE
- Fecha
- Monto
- Estado (pendiente, enviado, recibido, cancelado)

### 📝 BLOG

- ID del artículo (PK)
- Título
- Contenido
- Fecha de publicación
- ID autor (cliente o admin) (FK)
- Categoría (reseñas, noticias, guías, comunidad)

### 📷 IMAGEN_PRODUCTO (opcional)
- Imagen_id (PK)
- Url
- Descripcion
- Producto_id (FK) → PRODUCTO

---

## 🔗 RELACIONES Y CARDINALIDADES
- CLIENTE (1) ↔ (N) PRODUCTO: un cliente puede publicar muchos productos.
- CLIENTE (1) ↔ (N) BLOG_POST: un cliente puede escribir varios artículos del blog.
- PRODUCTO (1) ↔ (N) TRANSACCION: un producto puede tener muchas transacciones (venta, arriendo).
- CLIENTE (1) ↔ (N) TRANSACCION: un cliente puede ser comprador o vendedor en varias transacciones.
- PRODUCTO (1) ↔ (N) IMAGEN_PRODUCTO: un producto puede tener varias imágenes.

```
CLIENTE (cliente_id PK) 
    ├─< PRODUCTO (producto_id PK, cliente_id FK)
    │     └─< IMAGEN_PRODUCTO (imagen_id PK, producto_id FK)
    └─< BLOG_POST (post_id PK, autor_id FK)

PRODUCTO 
    └─< TRANSACCION (transaccion_id PK, producto_id FK, comprador_id FK, vendedor_id FK)
```
---

## 🔐 Reglas de Negocio

- Un cliente puede ser comprador y/o vendedor.
- Un juego puede estar disponible solo para venta, solo para arriendo o ambos.
- Los artículos del blog solo pueden ser creados por usuarios autorizados.
- El historial de transacciones se mantiene para trazabilidad.
- Los usuarios pueden recibir retroalimentación o calificación tras cada transacción.

---

## 🛠 Tecnologías Sugeridas

- PostgreSQL o MySQL como motor de base de datos relacional
- Integración con backend (por ejemplo, Node.js, Java, Python)
- ORM recomendado: Sequelize, Prisma, Hibernate o Django ORM

---

## 🚧 Próximos Pasos

- Diagramar modelo entidad-relación (MER)
- Implementar migraciones y seeds iniciales
- Diseñar endpoints de consulta de productos y usuarios
- Crear sistema de autenticación segura
- Integrar la base de datos al frontend

---

## 🧠 Inspiración

Este proyecto nace con el objetivo de modernizar la experiencia de compra-venta de juegos de mesa, promoviendo el consumo responsable, la reutilización y la creación de una comunidad segura, conectada y apasionada por los juegos.

---

## ✍️ Autoría

Por Turnos - Proyecto C2C de juegos de mesa.  
Desarrollado por Natalie Duchens Mura.

---
#### NOTA:
- 👀 Evaluaremos la posibilidad de implementar un sistema de arriendos, en caso de no lograrlo, solo será posible vender y comprar. 