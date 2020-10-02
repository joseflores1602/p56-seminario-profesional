const model = require('./model')

function addTitulacion( objeto ) {
    const titulacion = new model( objeto )
    titulacion.save()
}

async function getTitulacion( filtro ) {
    let filtroMongo = {}
    if (filtro != null) {
        filtroMongo = { nombre : filtro }
    }
    const titulacionList = await model.find( filtro )
    return titulacionList
}

async function updateTitulacion( id, objeto ) {
    const foundTitulacion = await model.findOne({ _id: id })

    foundTitulacion.tutor = objeto.tutor
    foundTitulacion.revisor = objeto.revisor
    foundTitulacion.estudiantes = objeto.estudiantes
    foundTitulacion.tipo_titulacion = objeto.tipo_titulacion
    foundTitulacion.archivo = objeto.archivo
    foundTitulacion.fecha_archivo = objeto.fecha_archivo
    foundTitulacion.estado = objeto.estado

    const result = await foundTitulacion.save()
    return result
}

function deleteTitulacion(id) {
    return model.deleteOne({ _id: id })
}

module.exports = {
    add: addTitulacion,
    get: getTitulacion,
    update: updateTitulacion,
    delete: deleteTitulacion,
}