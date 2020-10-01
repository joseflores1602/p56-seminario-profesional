const storage = require('./storage')

function addEstudiante(nombre, apellido, correo, carrera) {
    return new Promise((resolve, reject) => {
        let estudiante = {
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            carrera: carrera
        }
        storage.add( estudiante )
        resolve( estudiante )
    })
}

function getEstudiantes( filtro ) {
    return new Promise( (resolve, reject) => {
        resolve( storage.get( filtro ) )
    } )
}

function updateEstudiante(id, nombre, apellido, correo, carrera) {
    return new Promise( async (resolve, reject) => {
        let estudiante = {
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            carrera: carrera
        }
        const result = await storage.update(id, estudiante)
        resolve( result )
    })
}

function deleteEstudiante(id) {
    return new Promise((resolve, reject) => {
        storage.delete( id )
            .then(() => { resolve() })
            .catch((error) => { reject( error ) })
    })
}

module.exports = {
    addEstudiante,
    getEstudiantes,
    updateEstudiante,
    deleteEstudiante,
}