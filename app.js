require('dotenv').config()
const express = require('express')
var hbs = require('hbs');

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {    //Le decimos que debe renderizar el archivo hbs de la carpeta views
    res.render('home', {
        nombre: 'Luis Moyano',      //Mandamos esta info al home.hbs
        titulo: 'Curso de node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Luis Moyano',
        titulo: 'Curso de node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Luis Moyano',
        titulo: 'Curso de node'
    });
})

//DEFINIMOS PUERTO Y MENSAJE EN CONSOLA
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})



//SERVIR CONTENIDO ESTÁTICO
//app.use(express.static('public'))

//EJEMPLO USANDO EL TEMPLATE
// app.get('/', (req, res) => {
// })

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/template/generic.html')
// })

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/template/elements.html')
// })


//EJEMPLO PAG ESTÁTICA
// app.get('/', (req, res) => {
//     res.send('Home page')
// })

// app.get('*', (req, res) => {  //Esto * para cualquier ruta que no esté definida
//     res.sendFile(__dirname + '/public/404.html');
// })

