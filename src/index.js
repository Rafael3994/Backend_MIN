require('./database')
const app = require('./app')

/** Aqui se ejecuta en el servidor y si lo ejecutas tu se abre en local escuchando el puerto 4000 */
app.listen(process.env.PORT || 4000);
console.log("Servidor encendido en http://localhost:4000");