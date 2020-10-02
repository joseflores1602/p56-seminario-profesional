const storage = require('./storage')
const config = require('../../config')

function addTitulacion(carrera, tutor, revisor, estudiantes, tipo_titulacion, archivo, fecha_archivo, estado) {
    return new Promise((resolve, reject) => {
        if(!carrera || !tutor || !revisor || !estudiantes || !tipo_titulacion || !estado) {
            const error = 'No existe uno de los parámetros'
            console.log(error)
            reject(error)
        }
        let fileUrl = ''
        if(archivo) {
            fileUrl = `${config.host}:${config.port}${config.publicRoute}${config.filesRoute}${archivo}`
        }

        let titulacion = {
            carrera: carrera,
            tutor: tutor,
            revisor: revisor,
            estudiantes: estudiantes,
            tipo_titulacion: tipo_titulacion,
            archivo: fileUrl,
            fecha_archivo: new Date(),
            estado: estado
        }
        storage.add( titulacion )
        resolve( titulacion )
    })
}

function getTitulacion( filtro ) {
    return new Promise( (resolve, reject) => {
        resolve( storage.get( filtro ) )
    } )
}

function updateTitulacion(id, tutor, revisor, estudiantes, tipo_titulacion, archivo, fecha_archivo, estado) {
    return new Promise( async (resolve, reject) => {
        let titulacion = {
            tutor: tutor,
            revisor: revisor,
            estudiantes: estudiantes,
            tipo_titulacion: tipo_titulacion,
            archivo: archivo,
            fecha_archivo: fecha_archivo,
            estado: estado
        }
        const result = await storage.update(id, titulacion)
        resolve( result )
    })
}

function deleteTitulacion(id) {
    return new Promise((resolve, reject) => {
        storage.delete( id )
            .then(() => { resolve() })
            .catch((error) => { reject( error ) })
    })
}

module.exports = {
    addTitulacion,
    getTitulacion,
    updateTitulacion,
    deleteTitulacion,
}