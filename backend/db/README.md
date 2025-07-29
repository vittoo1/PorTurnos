# 🧩 Base de Datos - E-commerce C2C "Por Turnos"

## Contexto del Proyecto

**Por Turnos** es una plataforma de comercio electrónico C2C (consumer-to-consumer) especializada en juegos de mesa nuevos y usados. En este marketplace, los usuarios pueden vender, comprar y revender juegos de forma segura, fomentando una comunidad lúdica. Además, la plataforma cuenta con un blog con artículos sobre juegos, reseñas y consejos de compra.

---

## Objetivos de la Base de Datos

- Gestionar la información de los usuarios (clientes/vendedores).
- Registrar y administrar productos (juegos de mesa).
- Almacenar imágenes de productos para visualización en el frontend.
- Organizar publicaciones del blog y sus autores.
- Registrar puntuaciones de usuarios luego de transacciones.
- Facilitar la consulta eficiente de productos, clientes y contenido del blog.

---

## Entidades Principales

### 👤 CLIENTES

- `id` (PK)
- `rut` (UNIQUE)
- `nombres`
- `apellidos`
- `email` (UNIQUE)
- `telefono`
- `direccion`
- `fecha_registro`

> 🔁 Los clientes pueden actuar como compradores y/o vendedores.

---

### 🎲 PRODUCTOS

- `id` (PK)
- `cliente_id` (FK) → CLIENTES
- `titulo`
- `descripcion`
- `precio`
- `estado` (`nuevo`, `semi_nuevo`, `usado`)
- `disponibilidad` (`disponible`, `vendido`, `pausado`)
- `imagen` (URL en texto plano)
- `fecha_publicacion`

---

### 📷 IMAGENES_PRODUCTO (opcional, si se usan múltiples imágenes)

- `id` (PK)
- `producto_id` (FK) → PRODUCTOS
- `url_imagen`

---

### 📝 ENTRADAS_BLOG

- `id` (PK)
- `titulo`
- `contenido`
- `autor` (nombre del autor)
- `fecha_publicacion`
- `publicado` (boolean)

---

### 🌟 PUNTUACIONES

- `id` (PK)
- `comprador_id` (FK) → CLIENTES
- `vendedor_id` (FK) → CLIENTES
- `producto_id` (FK) → PRODUCTOS
- `puntuacion` (1 a 5)
- `comentario`
- `fecha_puntuacion`

---

## 🔗 RELACIONES Y CARDINALIDADES

- CLIENTES (1) ↔ (N) PRODUCTOS: un cliente puede publicar varios productos.
- CLIENTES (1) ↔ (N) ENTRADAS_BLOG: un cliente puede publicar múltiples artículos.
- PRODUCTOS (1) ↔ (N) PUNTUACIONES: cada producto puede recibir varias puntuaciones.
- CLIENTES (1) ↔ (N) PUNTUACIONES: los clientes pueden ser compradores y vendedores en varias puntuaciones.
- PRODUCTOS (1) ↔ (N) IMAGENES_PRODUCTO: si se implementa, un producto puede tener múltiples imágenes.

  

<img width="1538" height="750" alt="Untitled" src="https://github.com/user-attachments/assets/570406d5-e0cc-4c67-834d-7663b644210f" />


```
CLIENTES (id PK)
├─< PRODUCTOS (id PK, cliente_id FK)
│ └─< IMAGENES_PRODUCTO (id PK, producto_id FK)
└─< ENTRADAS_BLOG (id PK, autor)

PRODUCTOS
└─< PUNTUACIONES (id PK, producto_id FK, comprador_id FK, vendedor_id FK)
```

---

## 🔐 Reglas de Negocio

- Los clientes pueden actuar como compradores, vendedores o ambos.
- Un producto puede estar disponible para venta, y cambiar su estado según transacciones.
- Las puntuaciones reflejan la experiencia del comprador tras la compra.
- Los artículos del blog pueden ser publicados por cualquier cliente, administrador o autor autorizado.
- El historial de publicaciones y puntuaciones se mantiene para trazabilidad.

---

## 🛠 Tecnologías Utilizadas

- **MySQL** como motor de base de datos relacional
- Integración sugerida con backend en **Java**, **Node.js**, o **Python**
- ORMs sugeridos: **Hibernate**, **Sequelize**, **Prisma**, o **Django ORM**

---

## 🚧 Próximos Pasos

- Diagramar modelo entidad-relación (MER)
- Implementar migraciones y datos de prueba (seeds)
- Diseñar endpoints para productos, clientes y blog
- Agregar autenticación y autorización seguras
- Crear dashboard administrativo (ventas, usuarios, productos)

---

## 🧠 Inspiración

Este proyecto nace con el objetivo de modernizar la experiencia de compra-venta de juegos de mesa, promoviendo el consumo responsable, la reutilización y la creación de una comunidad segura, conectada y apasionada por los juegos.

---

## ✍️ Autoría

**Por Turnos** - Proyecto C2C de juegos de mesa  
Desarrollado por **Natalie Duchens Mura**

---

#### NOTA:
👀 Se contempla implementar sistema de arriendo en futuras versiones. Por ahora, la plataforma se centrará en la compra-venta de juegos.
