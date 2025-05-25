---
title: 🗂️ Estructura del Proyecto
description: Organización de carpetas y archivos del frontend.
---

```bash
Proyect-AcceShoes/
├── src/
│   ├── app/
│   │   ├── components/        # Componentes visuales reutilizables
│   │   ├── pages/             # Páginas principales como login, home, carrito
│   │   ├── services/          # Conexión a la API externa (UserService, ChatService...)
│   │   ├── models/            # Interfaces y tipos de datos
│   │   ├── guards/            # Protección de rutas (auth, admin)
│   │   ├── interceptors/      # Manejo global de errores y headers
│   └── environments/          # Variables de entorno (API URL)
└── angular.json               # Configuración del proyecto
