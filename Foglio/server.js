const express = require ('express');
const connectDB = require ()
 
const app =  express ();

//Connnect to db
connectDB();


app.get('/' (req, send) => res.send('API Running'));

const PORT = process.env.PORT ||5000;

app.listen(PORT ()