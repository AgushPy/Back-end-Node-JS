const { response , request} =  require('express');


const usuariosGet  = (req = request, res = response) => {

    const {q,nombre,apikey} = req.query;

    res.json({
        ok : true,
        msg : 'get a mi Api - Controlador',
        q,
        nombre,
        apikey
    
    })
}


const usuariosPost = (req = request, res = response) => {

    const {nombre,edad} = req.body

    res.json({
        ok : true,
        msg : 'post a mi Api - Controlador',
        nombre,
        edad
    })
}

const usuariosPut = (req = request, res = response) => {
    
    const {id} =  req.params;
    
    res.json({
        ok : true,
        msg : 'put a mi Api - Controlador',
        id
    })
}

const usuariosPatch = (req = request, res = response) => {
    res.json({
        ok : true,
        msg : 'patch a mi Api - Controlador'
    })
}

const usuariosDelete =  (req = request, res = response) => {
    res.json({
        ok : true,
        msg : 'delete a mi Api - Controlador'
    })
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}