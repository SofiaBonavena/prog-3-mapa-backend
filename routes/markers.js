// Ejecutar funciones cuando alguien entra con un verbo (get, post etc)

const rutas = (app) =>{

const Marker = require('../models/markers'); // Importar markers

    // GET (GET)
    const findAllMarkers = (req, res) => {
        Marker.find((err, markers)=> {
            if (!err) {
                console.log('GET /markers')
                console.log(markers)
                res.send(markers)
            }

        })
        
    }

    //FIND ONE (GET)
    const findOneMarker = (req, res) => {
        Marker.findById(req.params.id,(err, marker)=>{
            if(!err){
                console.log('GET /markers')
                res.send(marker)
            }
        })
    }

    // ADD (POST)
    const addMarker = (req, res)=>{
        const marker = new Marker({ // Generamos nuestro modelo con nuestra dat cargada
            id: req.body.id,
            descripcion: req.body.descripcion,
            lat: req.body.lat,
            lng: req.body.lng,
            type: req.body.type,
        })

        marker.save((err)=>{ // Lo guardamos con save y agregamos callback para ver si anda o si no
            if(!err) {
                console.log('Creado!')
            }else {
                console.log('Hubo error')
            }
        })

        res.send(marker) // Para devolver lo que pasamos
        
    }

    // EDIT (PUT) 
    const editMarker = (req, res) => { 
        Marker.findById(req.params.id,(err, marker) => { // Recibe el parametro Id
            marker.nombre = req.body.nombre;
            marker.descripcion = req.body.descripcion;
            marker.lat = req.body.lat;
            marker.lng = req.body.lng;
            marker.type = req.body.type;
            marker.save((err) => {
                if(!err) {
                    console.log('Actualizado')
                }else {
                    console.log('Hubo error al actualizar', err)
                }
                res.send(marker)
            })
        }) 
    }
    
    // REMOVE (DELETE)

    const deleteMarker = (req, res) => { 
        Marker.findById(req.params.id,(err, marker) => { 
            marker.remove((err) => {
                if(!err) {
                    console.log('Eliminado')
                }else {
                    console.log('Hubo error al eliminar', err)
                }
                res.send(marker)
            })
        }) 
    }

    app.get('/marker/:id', findOneMarker);
    app.get('/markers', findAllMarkers)
    app.post('/markers', addMarker)
    app.put('/markers/:id', editMarker) // Se le agrega el :id para entrar a uno en especial que se tenga que actualizar
    app.delete('/markers/:id', deleteMarker) // Falta delete

}


module.exports = rutas