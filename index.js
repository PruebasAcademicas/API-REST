const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const conectarDB = require('./base-datos/conexion');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

conectarDB();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); 

app.get('/', (req, res) => {
res.json({ mensaje: 'La API funciona correctamente' });
});

const rutasTareas = require('./rutas/tareas');
app.use('/api/tareas', rutasTareas);

app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
