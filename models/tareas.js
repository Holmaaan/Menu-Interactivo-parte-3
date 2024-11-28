const Tarea = require('../models/tarea');

class Tareas {
    _listado = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            listado.push(this._listado[key]);
        });
        return listado;
    }

    constructor() {
        this._listado = {};
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listarTareas() {
        console.log('Lista de tareas:');
        this.listadoArr.forEach((tarea, index) => {
            console.log(`${index + 1}. Descripción: ${tarea.desc}, Completada: ${tarea.completadoEn ? 'Sí' : 'No'}`);
        });
    }

    listarCompletadas() {
        console.log('Tareas completadas:');
        this.listadoArr.filter(tarea => tarea.completadoEn).forEach((tarea, index) => {
            console.log(`${index + 1}. Descripción: ${tarea.desc}`);
        });
    }

    listarPendientes() {
        console.log('Tareas pendientes:');
        this.listadoArr.filter(tarea => !tarea.completadoEn).forEach((tarea, index) => {
            console.log(`${index + 1}. Descripción: ${tarea.desc}`);
        });
    }

    completarTareas(ids = []) {
        ids.forEach(id => {
            const tarea = this._listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        });
    }
}

module.exports = Tareas;
