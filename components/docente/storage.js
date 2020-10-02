const model = require('./model')

function addDocente( objeto ) {
    const docente = new model( objeto )
    docente.save()
}

async function getDocentes( filtro ) {
    let filtroMongo = {}
    if (filtro != null) {
        filtroMongo = { nombre : filtro }
    }
    const docenteList = await model.find( filtro )
    return docenteList
}

async function updateDocente( id, objeto ) {
    const foundDocente = await model.findOne({ _id: id })

    foundDocente.nombre = objeto.nombre
    foundDocente.apellido = objeto.apellido
    foundDocente.correo = objeto.correo

    const result = await foundDocente.save()
    return result
}

function deleteDocente(id) {
    return model.deleteOne({ _id: id })
}

module.exports = {
    add: addDocente,
    get: getDocentes,
    update: updateDocente,
    delete: deleteDocente,
}