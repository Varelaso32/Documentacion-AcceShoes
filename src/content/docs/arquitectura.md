---
title: 🏗️ Arquitectura de la Información
description: Entiende cómo está estructurada la plataforma AcceShoes.
---

La arquitectura de información de **AcceShoes** define cómo se organiza, accede y gestiona el contenido dentro del sistema, tanto para usuarios como para administradores. Esto permite que cada tipo de usuario tenga acceso a las funcionalidades adecuadas, mejorando la usabilidad y eficiencia del sistema.

---

## 👤 Usuario Regular

> El núcleo de la experiencia de compra y venta.

### Funcionalidades principales

- 🛒 Explorar productos en venta o subasta
- 🔎 Usar filtros inteligentes para buscar artículos
- 🧺 Agregar productos al carrito
- 💬 Enviar mensajes a vendedores o compradores
- 🛠️ Administrar su perfil y configuraciones
- ⭐ Calificar transacciones
- 🚩 Reportar comportamientos indebidos

---

## 🛍️ Vendedor / Promotor

> Usuarios que pueden listar productos y solicitar promociones.

### Funcionalidades adicionales

- ➕ Publicar productos con fotos y descripción
- 📈 Solicitar promoción de productos
- ✏️ Editar y eliminar publicaciones
- 🧾 Revisar rendimiento de sus ventas
- 💬 Atender mensajes de compradores

---

## 🔐 Administrador

> Gestión total del ecosistema digital de AcceShoes.

### Funciones de administración

- 🧑‍💻 Gestión de usuarios (roles, bloqueos, desbloqueos)
- 📊 Monitoreo y reportes de publicaciones y actividades
- 🛠️ Aprobación o rechazo de solicitudes de promoción
- 📍 Control de ubicaciones sugeridas
- 🧾 Revisión y resolución de reportes
- 🌐 Configuración de parámetros globales del sistema

---

## 🧩 Mapa de componentes del sistema

```text
[Usuario] ─┬─> Catálogo (Venta/Subasta)
           ├─> Perfil y Configuración
           ├─> Carrito de compras
           └─> Sistema de Mensajes

[Vendedor] ─> Mis Productos / Promociones

[Admin] ─┬─> Panel de Control
         ├─> Gestión de Usuarios
         ├─> Moderación de Contenido
         └─> Reportes y Estadísticas
