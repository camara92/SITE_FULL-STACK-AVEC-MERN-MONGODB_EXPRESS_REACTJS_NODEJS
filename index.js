import express from 'express';
// const express = require('express');
import { MongoClient, ServerApiVersion } from 'mongodb';
const app = express()
const port = 4000;

const uri = "mongodb+srv://camara92:Wxtaze9z1K5knzlq@cluster0.bbhrjyy.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, 
  serverApi:  ServerApiVersion.v1 });
  client.connect((err)=> {
    // const collection = client.db("test").collection("devices");
    console.log("base de données connectée ");
    client.close(); 
  });




app.get('/', (_, res)=> {
    res.send("Bonjour daouda dadzada")
})
app.listen(port, ()=> {
    console.log("Serveur sur le port "+ port);
})
