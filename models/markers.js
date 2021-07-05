const mongoose = require('mongoose'), // Como queremos que sea el registro que se inserta
    Schema = mongoose.Schema;
const leadSchema = new Schema({
    id:{ type: String },
    descripcion:{ type: String },
    lat:{ type: String },
    lng:{ type: String },
    type:{ type: String }
});

module.exports = mongoose.model('Marker', leadSchema,'markers');
