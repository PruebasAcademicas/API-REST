const express = require('express');
const router = express.Router();

const {
  crearTarea,
  obtenerTareas,
  obtenerTareaPorId,
  actualizarTarea,
  eliminarTarea
} = require('../controladores/tareaControlador');

router.post('/', crearTarea);
router.get('/', obtenerTareas);
router.get('/:id', obtenerTareaPorId);
router.patch('/:id', actualizarTarea);
router.delete('/:id', eliminarTarea);

module.exports = router;
