const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

// const shelf_controller = require( './controller/shelf_controller.js' );
// const bin_controller = require( './controller/bin_controller' );

const app = express();

app.use( bodyParser.json() );

app.use( express.static( `${__dirname}/../build` ) );

massive(process.env.CONNECTION_STRING)
.then( dbInstance => {
    app.set('db', dbInstance)
    console.log("db connected")
}).catch( err => console.log("Massive", err) );

//Shelf Controller

app.get

//Bin Controller
app.post
app.get
app.get
app.put
app.delete


const port =  process.env.PORT || 4000;
app.listen( port, () => { console.log(`Listening on port ${port}.`); } )