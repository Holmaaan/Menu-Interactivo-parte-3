const { v4: uuidv4 } = require('uuid');

class Usuario {
    id = '';
    nombre = '';
    correo = '';

    constructor(nombre, correo) {
        this.id = uuidv4();
        this.nombre = nombre;
        this.correo = correo;
    }
}

module.exports = Usuario;
