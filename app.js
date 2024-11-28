const fs = require('fs');

// Función para guardar los datos en un archivo .json
const guardarDB = (data, tipo = 'tareas') => {
    const archivo = tipo === 'usuarios' ? './db/usuarios.json' : './db/tareas.json';  // Usamos diferente archivo según el tipo
    fs.writeFileSync(archivo, JSON.stringify(data, null, 2));
    console.log(`Datos guardados en ${archivo}`);
};

module.exports = { guardarDB };
