import express from 'express';
// const express = require('express');
import dotenv from 'dotenv'
import { MongoClient, ServerApiVersion } from 'mongodb';
const app = express()
const port = 8000;
dotenv.config(); 
const uri= process.env.STRING_URI; 
// const uri = "mongodb+srv://camara92:Wxtaze9z1K5knzlq@cluster0.bbhrjyy.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, 
  serverApi:  ServerApiVersion.v1 });
  app.get('/', (_, res)=> {
  client.connect((err, db)=> {
      // etablir 
      console.log("base de données connectée ");
    if(err|| !db){
        return false; 
    }
    // connexion a la base : 
   db.db = client.db("blog").collection("post").find().toArray( function(err, resultat){
    if(!err){ 
        console.log(resultat)
        res.status(200).send(resultat);
    }
   });
    //client.close(); 
  });
})
app.listen(port, ()=> {
    console.log("Serveur sur le port "+ port);
})
