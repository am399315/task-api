const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// Crear aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Array para almacenar tareas
let tasks = [];
let nextId = 1;

// Ruta principal
app.get('/', (req, res) => {
  res.json({
    message: 'API de Gestión de Tareas',
    status: 'online',
    version: '1.0.0'
  });
});

// Rutas de la API
// 1. Obtener todas las tareas
app.get('/api/tasks', (req, res) => {
  res.status(200).json({
    success: true,
    count: tasks.length,
    data: tasks
  });
});

// 2. Obtener una tarea por ID
app.get('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  
  if (isNaN(taskId)) {
    return res.status(400).json({
      success: false,
      error: 'ID de tarea inválido'
    });
  }
  
  const task = tasks.find(task => task.id === taskId);
  
  if (!task) {
    return res.status(404).json({
      success: false,
      error: 'Tarea no encontrada'
    });
  }
  
  res.status(200).json({
    success: true,
    data: task
  });
});

// 3. Crear una nueva tarea
app.post('/api/tasks', (req, res) => {
  const { description } = req.body;
  
  if (!description || typeof description !== 'string' || !description.trim()) {
    return res.status(400).json({
      success: false,
      error: 'La descripción de la tarea es requerida'
    });
  }
  
  const newTask = {
    id: nextId++,
    description: description.trim(),
    completed: false,
    createdAt: new Date().toISOString()
  };
  
  tasks.push(newTask);
  
  res.status(201).json({
    success: true,
    data: newTask,
    message: 'Tarea creada con éxito'
  });
});

// 4. Actualizar una tarea
app.put('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const updates = req.body;
  
  if (isNaN(taskId)) {
    return res.status(400).json({
      success: false,
      error: 'ID de tarea inválido'
    });
  }
  
  const index = tasks.findIndex(task => task.id === taskId);
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      error: 'Tarea no encontrada'
    });
  }
  
  tasks[index] = {
    ...tasks[index],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  res.status(200).json({
    success: true,
    data: tasks[index],
    message: 'Tarea actualizada con éxito'
  });
});

// 5. Eliminar una tarea
app.delete('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  
  if (isNaN(taskId)) {
    return res.status(400).json({
      success: false,
      error: 'ID de tarea inválido'
    });
  }
  
  const index = tasks.findIndex(task => task.id === taskId);
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      error: 'Tarea no encontrada'
    });
  }
  
  const deletedTask = tasks[index];
  tasks.splice(index, 1);
  
  res.status(200).json({
    success: true,
    data: deletedTask,
    message: 'Tarea eliminada con éxito'
  });
});

// Manejador de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    error: 'Ruta no encontrada'
  });
});

// Para desarrollo local
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
  });
}

// Exportar app para Vercel
module.exports = app;