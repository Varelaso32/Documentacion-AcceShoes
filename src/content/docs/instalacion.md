---
title: ▶️ Instalación y Ejecución
description: Cómo ejecutar el proyecto en entorno local.
---

1. Clona el repositorio:

```bash
git clone https://github.com/Varelaso32/Proyect-AcceShoes.git
cd Proyect-AcceShoes
```

2. Instala las dependencias:

```bash
npm install
```

3. Configura el entorno (archivo environment.ts):

```bash
export const environment = {
  production: false,
  apiUrl: 'https://fastacceshoes.onrender.com/api'
};
```

4. Levanta el servidor de desarrollo:

```bash
ng serve
```

La app estará disponible en: http://localhost:4200