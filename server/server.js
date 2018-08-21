const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const shelf_controller = require( './controller/shelf_controller.js' );
const bin_controller = require( './controller/bin_controller' );

const app = express();

app.use( bodyParser.json() );

app.use( express.static( `${__dirname}/../build` ) );

massive(process.env.CONNECTION_STRING)
.then( dbInstance => {
    app.set('db', dbInstance)
    console.log("db connected")
}).catch( err => console.log("Massive", err) );

//Shelf Controller

app.get('/api/shelf/:id', shelf_controller.readShelf);

//Bin Controller
app.get('/api/bin/:shelf_letter/:bin_number', bin_controller.getBin);
app.put('/api/bin/:shelf_letter/:bin_number', bin_controller.editBin);
app.put('/api/bin/:shelf_letter/:bin_number', bin_controller.createProduct);
app.put('/api/bin/:shelf_letter/:bin_number', bin_controller.deleteBin);


const port =  process.env.PORT || 4000;
app.listen( port, () => { console.log(`Listening on port ${port}.`); } )