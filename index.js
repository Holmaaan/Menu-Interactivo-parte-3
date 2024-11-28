const { menu, pausa, leerInput } = require('./helpers/menu');
const Tareas = require('./models/tareas');
const Usuarios = require('./models/usuarios');
const { guardarDB } = require('./app');  // Función para guardar la base de datos

const principal = async () => {

    let opt = '';
    const tareas = new Tareas();
    const usuarios = new Usuarios();

    do {
        opt = await menu();

        switch (opt) {
            case '1':
                // Crear tarea
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
                guardarDB(tareas.listadoArr, 'tareas'); // Guarda en tareas.json
                console.log('Tarea creada correctamente.');
                break;

            case '2':
                // Listar tareas
                tareas.listarTareas();
                break;

            case '3':
                // Listar tareas completadas
                tareas.listarCompletadas();
                break;

            case '4':
                // Listar tareas pendientes
                tareas.listarPendientes();
                break;

            case '5':
                // Completar tarea(s)
                const ids = await leerInput('IDs de tareas a completar (separados por coma): ');
                tareas.completarTareas(ids.split(','));
                guardarDB(tareas.listadoArr, 'tareas');
                console.log('Tareas completadas correctamente.');
                break;

            case '7':
                // Crear usuario
                const nombre = await leerInput('Nombre del usuario: ');
                const correo = await leerInput('Correo del usuario: ');
                usuarios.crearUsuario(nombre, correo);
                guardarDB(usuarios.listadoArr, 'usuarios'); // Guarda en usuarios.json
                console.log('Usuario creado correctamente.');
                break;

            case '8':
                // Listar usuarios
                usuarios.listarUsuarios();
                break;

            default:
                break;
        }

        await pausa();
    } while (opt !== '0');
}

principal();
