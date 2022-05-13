import express from 'express';
import PATH from 'path';
import consign from 'consign';
import bodyParser from 'body-parser'
import ejs from 'ejs'

import {ocultarSenha} from './model/components/segurança.js'
var app = express();

//npm install body-parser
app.use(bodyParser.urlencoded({extended: true}));

//nom install ejs
app.engine('html', ejs);
app.set('view engine', 'ejs');
app.set('views', PATH.join(__dirname, '/view/'));


consign().include('controller/routes').into(app);

app.listen(8081, () => {
    console.log("http://localhost:8081");
})

//console.log(ocultarSenha("Abacate"));