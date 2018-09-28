const express = require('express');
const hbs = require('hbs');

const app = new express();

const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');
require('./hbs/helpers.js')

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'mIGUEL',
    });

});

app.get('/about', (req, res) => {

    res.render('about', {});

});
app.listen(port, () => {
    console.log('Escuchando  peticiones en el puerto 3000');
});