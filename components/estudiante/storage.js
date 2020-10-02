const model = require('./model')

function addEstudiante( objeto ) {
    const estudiante = new model( objeto )
    estudiante.save()
}

async function getEstudiantes( filtro ) {
    let filtroMongo = {}
    if (filtro != null) {
        filtroMongo = { nombre : filtro }
    }
    const estudianteList = await model.find( filtro )
    return estudianteList
}

async function updateEstudiante( id, objeto ) {
    const foundEstudiante = await model.findOne({ _id: id })

    foundEstudiante.nombre = objeto.nombre
    foundEstudiante.apellido = objeto.apellido
    foundEstudiante.correo = objeto.correo
    foundEstudiante.carrera = objeto.carrera

    const result = await foundEstudiante.save()
    return result
}

function deleteEstudiante(id) {
    return model.deleteOne({ _id: id })
}

module.exports = {
    add: addEstudiante,
    get: getEstudiantes,
    update: updateEstudiante,
    delete: deleteEstudiante,
}