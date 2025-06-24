const Tarea = require('../modelos/Tarea');
const crearTarea = async (req, res) => {
const { titulo, descripcion } = req.body;

if (!titulo || !descripcion) {
    return res.status(400).json({
      mensaje: 'Por favor llena todos los campos: título y descripción.'
    });
  }

  try {
    const nuevaTarea = new Tarea({ titulo, descripcion });
    const tareaGuardada = await nuevaTarea.save();
    res.status(201).json(tareaGuardada);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al guardar la tarea.', error });
  }
};

const obtenerTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find().select('-__v');
    res.json(tareas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las tareas.', error });
  }
};

const obtenerTareaPorId = async (req, res) => {
  const { id } = req.params;

  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ mensaje: 'El ID que enviaste no es válido.' });
  }

  try {
    const tarea = await Tarea.findById(id);
    if (!tarea) {
      return res.status(404).json({ mensaje: 'No se encontró la tarea.' });
    }
    res.json(tarea);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al buscar la tarea.', error });
  }
};

const actualizarTarea = async (req, res) => {
  const { id } = req.params;

  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ mensaje: 'El ID que enviaste no es válido.' });
  }

  try {
    const tareaActualizada = await Tarea.findByIdAndUpdate(id, req.body, { new: true });
    if (!tareaActualizada) {
      return res.status(404).json({ mensaje: 'No se encontró la tarea para actualizar.' });
    }
    res.json(tareaActualizada);
  } catch (error) {
    res.status(400).json({ mensaje: 'No se pudo actualizar la tarea.', error });
  }
};

const eliminarTarea = async (req, res) => {
  const { id } = req.params;

  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ mensaje: 'El ID que enviaste no es válido.' });
  }

  try {
    const tareaEliminada = await Tarea.findByIdAndDelete(id);
    if (!tareaEliminada) {
      return res.status(404).json({ mensaje: 'No se encontró la tarea para eliminar.' });
    }
    res.json({ mensaje: 'Tarea eliminada correctamente.' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar la tarea.', error });
  }
};

module.exports = {
  crearTarea,
  obtenerTareas,
  obtenerTareaPorId,
  actualizarTarea,
  eliminarTarea
};

