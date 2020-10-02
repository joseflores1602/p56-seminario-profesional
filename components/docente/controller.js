const storage = require('./storage')

function addDocente(nombre, apellido, correo) {
    return new Promise((resolve, reject) => {
        let docente = {
            nombre: nombre,
            apellido: apellido,
            correo: correo,
        }
        storage.add( docente )
        resolve( docente )
    })
}

function getDocentes( filtro ) {
    return new Promise( (resolve, reject) => {
        resolve( storage.get( filtro ) )
    } )
}

function updateDocente(id, nombre, apellido, correo) {
    return new Promise( async (resolve, reject) => {
        let docente = {
            nombre: nombre,
            apellido: apellido,
            correo: correo,
        }
        const result = await storage.update(id, docente)
        resolve( result )
    })
}

function deleteDocente(id) {
    return new Promise((resolve, reject) => {
        storage.delete( id )
            .then(() => { resolve() })
            .catch((error) => { reject( error ) })
    })
}

module.exports = {
    addDocente,
    getDocentes,
    updateDocente,
    deleteDocente,
}