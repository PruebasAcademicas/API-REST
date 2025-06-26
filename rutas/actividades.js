const express = require('express');
const router = express.Router();

const {
    crearActividad,
    obtenerActividades,
    obtenerActividadPorId,
    actualizarActividad,
    eliminarActividad
} = require('../controladores/actividadControlador');

router.post('/', crearActividad);
router.get('/', obtenerActividades);
router.get('/:id', obtenerActividadPorId);
router.patch('/:id', actualizarActividad);
router.delete('/:id', eliminarActividad);

module.exports = router;
