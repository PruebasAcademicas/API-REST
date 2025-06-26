const mongoose = require('mongoose');

const ActividadSchema = new mongoose.Schema({
    nombreActividad: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    fechaEntrega: {
        type: Date,
        required: true
    },
    estado: {
        type: String,
        enum: ['pendiente', 'entregada', 'calificada'],
        default: 'pendiente'
    },
    puntajeObtenido: {
        type: Number,
        default: 0
    },
    aprendiz: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Actividad', ActividadSchema);
