# API Básica con Node.js y Express

Esta es una API básica con operaciones CRUD desarrollada con Node.js y Express. 

## Cómo usar

1. Clona este repositorio.
2. Instala las dependencias: `npm install`.
3. Ejecuta el servidor: `npm run dev`.
4. Prueba los endpoints con Postman o tu cliente HTTP favorito.

## Endpoints

### GET /items
- Obtiene todos los items.

### POST /items
- Crea un nuevo item.
- Cuerpo esperado:
  ```json
  {
    "name": "Nombre del item",
    "description": "Descripción del item"
  }
