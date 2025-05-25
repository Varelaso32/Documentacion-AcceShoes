---
title: 🔌 Conexión a la API
description: Endpoints consumidos por el frontend y manejo de autenticación.
---

Este frontend se comunica con la siguiente API externa: https://fastacceshoes.onrender.com/api


## 👤 Usuarios

:::list
- `GET /users/` — Obtener todos los usuarios
- `POST /users/` — Registrar nuevo usuario
- `POST /users/login` — Login de usuario
- `GET /users/me` — Obtener datos del usuario autenticado
- `PUT /users/me` — Actualizar datos del usuario autenticado
- `PUT /users/{user_id}` — Actualizar datos de un usuario por ID
- `GET /users/{user_id}` — Obtener un usuario por ID
- `DELETE /users/{user_id}` — Eliminar usuario
- `PATCH /users/me/password` — Actualizar contraseña
- `PATCH /users/me/plan` — Cambiar plan propio
- `PATCH /users/{user_id}/plan` — Cambiar plan a un usuario
- `PATCH /users/{user_id}/role` — Cambiar rol de usuario
- `PATCH /users/{user_id}/status` — Cambiar estado del usuario
:::

---

## 📦 Planes

:::list
- `GET /plans/` — Obtener planes disponibles
- `POST /plans/` — Crear nuevo plan
- `PUT /plans/{plan_id}` — Actualizar plan
- `DELETE /plans/{plan_id}` — Eliminar plan
:::

---

## 💬 Chat

:::list
- `GET /chat/` — Obtener conversaciones del usuario
- `POST /chat/` — Contactar a un vendedor
- `GET /chat/{conversation_id}` — Obtener detalles de conversación
- `POST /chat/{conversation_id}/message` — Enviar mensaje
- `GET /chat/{conversation_id}/update` — Obtener nuevos mensajes
:::

---

## 🛍️ Productos

:::list
- `GET /products/` — Listar productos
- `GET /products/{product_id}` — Obtener producto por ID
- `DELETE /products/{product_id}` — Eliminar producto
- `PATCH /products/{product_id}/status` — Cambiar estado del producto
- `PATCH /products/{product_id}/block` — Bloquear producto
:::

---

## 📮 PQRSD

:::list
- `GET /pqrs/` — Obtener todos los Pqrs
- `POST /pqrs/` — Crear un Pqr
- `GET /pqrs/my-pqrs` — Obtener mis Pqrs
- `POST /pqrs/{pqr_id}/answer` — Responder a un Pqr
:::

---

## 🗂️ Categorías

:::list
- `GET /categories/` — Listar categorías
- `POST /categories/` — Crear nueva categoría
- `GET /categories/main` — Listar categorías principales
- `GET /categories/{category_id}` — Obtener detalles de categoría
- `PUT /categories/{category_id}` — Actualizar categoría
- `DELETE /categories/{category_id}` — Eliminar categoría
:::

---

## 🛒 Ventas

:::list
- `POST /sales/products` — Crear producto para venta
- `GET /sales/products/{product_id}` — Obtener detalle de venta
- `PUT /sales/products/{product_id}` — Actualizar producto en venta
:::

---

## ⏱️ Subastas

:::list
- `GET /auctions/products` — Listar productos en subasta
- `POST /auctions/products` — Crear producto para subasta
- `GET /auctions/products/active` — Listar subastas activas
- `GET /auctions/products/{product_id}` — Ver detalles de subasta
- `POST /auctions/products/{product_id}/bids` — Crear una puja
- `GET /auctions/products/{product_id}/bids` — Ver pujas de un producto
:::

---

## 🔐 Políticas de Privacidad

:::list
- `GET /privacy-policies/` — Listar políticas
- `POST /privacy-policies/` — Crear política
- `PUT /privacy-policies/{privacy_policy_id}` — Actualizar política
- `DELETE /privacy-policies/{privacy_policy_id}` — Eliminar política
:::

---

## 📄 Términos y Condiciones

:::list
- `GET /terms-and-conditions/` — Listar términos
- `POST /terms-and-conditions/` — Crear términos
- `PUT /terms-and-conditions/{term_or_condition_id}` — Actualizar términos
- `DELETE /terms-and-conditions/{term_or_condition_id}` — Eliminar términos
:::

---

Los headers y tokens de autenticación se manejan automáticamente por un interceptor global (`auth.interceptor.ts`).

---
