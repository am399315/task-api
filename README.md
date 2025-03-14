# API de Gestión de Tareas

Una API RESTful para gestionar tareas desarrollada con Node.js y Express.

## Despliegue

Esta API está desplegada en Vercel: [https://tu-url-de-vercel.app](https://tu-url-de-vercel.app)

## Endpoints

| Método HTTP | Endpoint | Descripción |
|-------------|----------|-------------|
| GET | /api/tasks | Obtener todas las tareas |
| GET | /api/tasks/:id | Obtener una tarea por ID |
| POST | /api/tasks | Crear una nueva tarea |
| PUT | /api/tasks/:id | Actualizar una tarea |
| DELETE | /api/tasks/:id | Eliminar una tarea |

## Instalación y Ejecución Local

1. Clona este repositorio
2. Instala dependencias: `npm install`
3. Inicia el servidor: `npm run dev`
4. Accede a la API en: http://localhost:3000