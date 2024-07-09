const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app =  express();

// importing routes - importando rutas
const customerRoutes = require('./routes/customer');

// setting
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs'); // ejs como motor de plantillas
app.set('views', path.join(__dirname, 'views')); //dirname nos da el la ruta y lo concatenamos con views

// midlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyectonode',
    port: 3306
}, 'single'));

app.use(express.urlencoded({extended: false})); //permite entender todos los datos del formulario

// routes - urls
app.use('/', customerRoutes);

// static files -- img, framework, codigo js va en la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// starting the server

app.listen(3000, ()=>{
    console.log('Server on port 3000');
})