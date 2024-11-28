const Usuario = require('./usuario');

class Usuarios {
    _usuarios = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._usuarios).forEach(key => {
            listado.push(this._usuarios[key]);
        });
        return listado;
    }

    constructor() {
        this._usuarios = {};
    }

    crearUsuario(nombre, correo) {
        const usuario = new Usuario(nombre, correo);
        this._usuarios[usuario.id] = usuario;
    }

    listarUsuarios() {
        console.log('Lista de usuarios:');
        this.listadoArr.forEach((usuario, index) => {
            console.log(`${index + 1}. Nombre: ${usuario.nombre}, Correo: ${usuario.correo}`);
        });
    }

    buscarUsuario(id) {
        return this._usuarios[id];
    }
}

module.exports = Usuarios;
