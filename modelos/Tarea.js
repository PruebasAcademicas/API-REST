const mongoose = require('mongoose');

const TareaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, 'El título es obligatorio.']
  },
  descripcion: {
    type: String,
    required: [true, 'La descripción es obligatoria.']
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Tarea', TareaSchema);
