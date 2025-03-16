# API de Gestión de Tareas

Una API RESTful para gestionar tareas desarrollada con Node.js y Express.

## Despliegue

Esta API está desplegada en Vercel: [https://task-3gy5ozty8-am399315s-projects.vercel.app](https://task-3gy5ozty8-am399315s-projects.vercel.app)

## Descripción

Este proyecto implementa una API de gestión de tareas que permite crear, leer, actualizar y eliminar tareas. La API está construida usando Node.js y Express, y está diseñada siguiendo los principios RESTful.

La API almacena las tareas en memoria, por lo que los datos se perderán al reiniciar el servidor. En un entorno de producción real, se utilizaría una base de datos persistente como MongoDB o PostgreSQL.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor
- **Express.js**: Framework web para crear APIs en Node.js
- **Cors**: Middleware para habilitar solicitudes de origen cruzado
- **Helmet**: Middleware para mejorar la seguridad de la API

## Estructura del Proyecto

```
task-api/
│
├── index.js           # Archivo principal con toda la lógica de la API
├── package.json       # Configuración del proyecto y dependencias
├── vercel.json        # Configuración para el despliegue en Vercel
├── .gitignore         # Archivos a ignorar en git
└── README.md          # Documentación del proyecto
```

## Instalación y Ejecución Local

1. Clonar este repositorio:
   ```bash
   git clone https://github.com/am399315/task-api.git
   cd task-api
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor:
   ```bash
   npm run dev
   ```

4. El servidor estará disponible en [http://localhost:3000](http://localhost:3000)

## Endpoints de la API

### Página de Bienvenida
- **URL**: `/`
- **Método**: `GET`
- **Descripción**: Muestra información básica sobre la API
- **Respuesta de Ejemplo**:
  ```json
  {
    "message": "API de Gestión de Tareas",
    "status": "online",
    "version": "1.0.0"
  }
  ```

### 1. Obtener todas las tareas
- **URL**: `/api/tasks`
- **Método**: `GET`
- **Descripción**: Retorna una lista de todas las tareas
- **Respuesta de Ejemplo**:
  ```json
  {
    "success": true,
    "count": 2,
    "data": [
      {
        "id": 1,
        "description": "Estudiar Node.js",
        "completed": false,
        "createdAt": "2025-03-14T15:30:00.000Z"
      },
      {
        "id": 2,
        "description": "Completar proyecto de API",
        "completed": true,
        "createdAt": "2025-03-14T16:45:00.000Z",
        "updatedAt": "2025-03-14T17:20:00.000Z"
      }
    ]
  }
  ```

### 2. Obtener una tarea específica
- **URL**: `/api/tasks/:id`
- **Método**: `GET`
- **Parámetros URL**: `id` - ID de la tarea a obtener
- **Descripción**: Retorna los detalles de una tarea específica
- **Respuesta de Ejemplo**:
  ```json
  {
    "success": true,
    "data": {
      "id": 1,
      "description": "Estudiar Node.js",
      "completed": false,
      "createdAt": "2025-03-14T15:30:00.000Z"
    }
  }
  ```
- **Respuesta de Error (404)**:
  ```json
  {
    "success": false,
    "error": "Tarea no encontrada"
  }
  ```

### 3. Crear una nueva tarea
- **URL**: `/api/tasks`
- **Método**: `POST`
- **Datos de Solicitud**:
  ```json
  {
    "description": "Nueva tarea"
  }
  ```
- **Descripción**: Crea una nueva tarea con la descripción proporcionada
- **Respuesta de Ejemplo**:
  ```json
  {
    "success": true,
    "data": {
      "id": 3,
      "description": "Nueva tarea",
      "completed": false,
      "createdAt": "2025-03-14T18:22:10.123Z"
    },
    "message": "Tarea creada con éxito"
  }
  ```
- **Respuesta de Error (400)**:
  ```json
  {
    "success": false,
    "error": "La descripción de la tarea es requerida"
  }
  ```

### 4. Actualizar una tarea
- **URL**: `/api/tasks/:id`
- **Método**: `PUT`
- **Parámetros URL**: `id` - ID de la tarea a actualizar
- **Datos de Solicitud**:
  ```json
  {
    "description": "Descripción actualizada",
    "completed": true
  }
  ```
- **Descripción**: Actualiza una tarea existente con los datos proporcionados
- **Respuesta de Ejemplo**:
  ```json
  {
    "success": true,
    "data": {
      "id": 3,
      "description": "Descripción actualizada",
      "completed": true,
      "createdAt": "2025-03-14T18:22:10.123Z",
      "updatedAt": "2025-03-14T18:25:45.789Z"
    },
    "message": "Tarea actualizada con éxito"
  }
  ```
- **Respuesta de Error (404)**:
  ```json
  {
    "success": false,
    "error": "Tarea no encontrada"
  }
  ```

### 5. Eliminar una tarea
- **URL**: `/api/tasks/:id`
- **Método**: `DELETE`
- **Parámetros URL**: `id` - ID de la tarea a eliminar
- **Descripción**: Elimina una tarea existente
- **Respuesta de Ejemplo**:
  ```json
  {
    "success": true,
    "data": {
      "id": 3,
      "description": "Descripción actualizada",
      "completed": true,
      "createdAt": "2025-03-14T18:22:10.123Z",
      "updatedAt": "2025-03-14T18:25:45.789Z"
    },
    "message": "Tarea eliminada con éxito"
  }
  ```
- **Respuesta de Error (404)**:
  ```json
  {
    "success": false,
    "error": "Tarea no encontrada"
  }
  ```

## Ejemplos de Uso con Thunder Client

### 1. Listar todas las tareas

1. Abrir Thunder Client en VS Code (haz clic en el icono de rayo en la barra lateral)
2. Crea una nueva solicitud haciendo clic en "New Request"
3. Configura la solicitud:
   - Método: GET
   - URL: https://task-3gy5ozty8-am399315s-projects.vercel.app/api/tasks
4. Haz clic en "Send" para ejecutar la solicitud
5. Verás la respuesta con la lista de tareas en el panel inferior

### 2. Crear una nueva tarea

1. Crea una nueva solicitud en Thunder Client
2. Configura la solicitud:
   - Método: POST
   - URL: https://task-3gy5ozty8-am399315s-projects.vercel.app/api/tasks
3. En la pestaña "Body", selecciona "JSON" y escribe:
   ```json
   {
     "description": "Completar la documentación"
   }
   ```
4. Haz clic en "Send"
5. Verás la respuesta con la nueva tarea creada

### 3. Actualizar una tarea

1. Crea una nueva solicitud en Thunder Client
2. Configura la solicitud:
   - Método: PUT
   - URL: https://task-3gy5ozty8-am399315s-projects.vercel.app/api/tasks/1 (reemplaza "1" con el ID de la tarea)
3. En la pestaña "Body", selecciona "JSON" y escribe:
   ```json
   {
     "completed": true
   }
   ```
4. Haz clic en "Send"
5. Verás la respuesta con la tarea actualizada

### 4. Eliminar una tarea

1. Crea una nueva solicitud en Thunder Client
2. Configura la solicitud:
   - Método: DELETE
   - URL: https://task-3gy5ozty8-am399315s-projects.vercel.app/api/tasks/1 (reemplaza "1" con el ID de la tarea)
3. No necesitas incluir un cuerpo para esta solicitud
4. Haz clic en "Send"
5. Verás la respuesta confirmando que la tarea fue eliminada

## Código de Funcionamiento

El archivo principal `index.js` contiene toda la lógica de la API. A continuación se muestra un resumen de lo que hace cada parte:

```javascript
// Importaciones de módulos
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// Configuración de la aplicación Express
const app = express();
app.use(helmet()); // Seguridad
app.use(cors());   // CORS
app.use(express.json()); // Parser JSON

// Almacenamiento de tareas en memoria
let tasks = [];
let nextId = 1;

// Definición de rutas:
// GET / - Página de bienvenida
// GET /api/tasks - Listar todas las tareas
// GET /api/tasks/:id - Obtener una tarea específica
// POST /api/tasks - Crear una nueva tarea
// PUT /api/tasks/:id - Actualizar una tarea
// DELETE /api/tasks/:id - Eliminar una tarea

// Exportación para Vercel
module.exports = app;
```

## Nota Importante

Esta API utiliza almacenamiento en memoria, lo que significa que los datos se perderán cuando se reinicie el servidor. En un entorno de producción, se recomienda utilizar una base de datos persistente.