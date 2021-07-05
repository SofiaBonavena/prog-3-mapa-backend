// Includes. Paquetes que quremos incluir
const express = require("express"),
    app = express(),
    methodOverride = require("method-override"),
    http = require("http"),
    server = http.createServer(app),
    mongoose = require('mongoose');

// Connection to DB
mongoose.connect(
  'mongodb+srv://sofianuevo:sofianuevo123nuevo@cluster0.1uwll.mongodb.net/gmaps?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, res) {
      try {
          console.log('Connected to Database');
      } catch (err) {
          console.log(err)
          throw err;
      }
  });

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride());
const cors = require('cors')
app.use(cors())

routes = require('./routes/markers')(app);


//URL Root URL Base, la home por asi decirlo
app.get('/', function (req, res) {
  res.send("Welcome to the machine ..."); 
});

app.get('/contact', function (req, res) {
  res.send("Welcome to the machine ...");
});

//app.post(`/`,(req,res)=>{ // Metodo (en este caso post) -> URL -> Funcion
//  const alumnoCompleto = {...req,body, comida:`milanga`}
//  res.send(alumnoCompleto)
// })


//Iniciamos el servidor
server.listen(process.env.PORT || 3000, function () {
  console.log(`Node server running on http://localhost:3000`);
});
module.exports = app;

