const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers') //No hay necesidad de declarar una variable ya que el helper se ejecuta igual

const port = process.env.PORT || 3000; //En caso de no existir el puerto de heroku se le da el valor de 3000

app.use(express.static(__dirname + '/public'));

// Express hbs engine

hbs.registerPartials(  __dirname + '/views/parcials' );
app.set('view engine', 'hbs');


 
app.get('/', (req, res) => {
//   res.send('Hello World')
    
    res.render('home', {
        nombre: 'jonaTan',
    });
});
 
app.get('/about', (req, res) => {
        
    res.render('about', {
            
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});