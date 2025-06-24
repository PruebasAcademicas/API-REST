const mongoose = require('mongoose');

const conectarDB = async () => {
try {
await mongoose.connect(process.env.MONGO_URI);
console.log(' Conexión exitosa con MongoDB Atlas');
} catch (error) {
console.error('Error al conectar a MongoDB:', error.message);
process.exit(1); 
}
};


module.exports = conectarDB;
