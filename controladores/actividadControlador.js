const mongoose = require('mongoose');
const Actividad = require('../modelos/Actividad');

const crearActividad = async (req, res) => {
    const { nombreActividad, descripcion, fechaEntrega, aprendiz } = req.body;

    if (!nombreActividad || !descripcion || !fechaEntrega || !aprendiz) {
        return res.status(400).json({
            mensaje: 'Completa todos los campos.'
        });
    }

    try {
        const nueva = new Actividad(req.body);
        const guardada = await nueva.save();
        res.status(201).json(guardada);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear la actividad.', error });
    }
};

const obtenerActividades = async (req, res) => {
    try {
        const actividades = await Actividad.find();
        res.json(actividades);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener las actividades.', error });
    }
};

const obtenerActividadPorId = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ mensaje: 'ID no valido' });
    }

    try {
        const actividad = await Actividad.findById(id);
        if (!actividad) {
            return res.status(404).json({ mensaje: 'Actividad no encontrada.' });
        }
        res.json(actividad);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al buscar la actividad.', error });
    }
};

const actualizarActividad = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ mensaje: 'ID no válido' });
    }

    try {
        const actualizada = await Actividad.findByIdAndUpdate(id, req.body, { new: true });
        if (!actualizada) {
            return res.status(404).json({ mensaje: 'Actividad no encontrada.' });
        }
        res.json(actualizada);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar la actividad.', error });
    }
};


const eliminarActividad = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ mensaje: 'ID no valido' });
    }

    try {
        const eliminada = await Actividad.findByIdAndDelete(id);
        if (!eliminada) {
            return res.status(404).json({ mensaje: 'Actividad no encontrada.' });
        }
        res.json({ mensaje: 'Actividad eliminada ' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la actividad.', error });
    }
};

module.exports = {
    crearActividad,
    obtenerActividades,
    obtenerActividadPorId,
    actualizarActividad,
    eliminarActividad
};
