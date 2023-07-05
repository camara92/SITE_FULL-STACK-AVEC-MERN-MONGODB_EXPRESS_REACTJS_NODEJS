import express from 'express';
// const express = require('express');
const app = express()
const port = 4000;
app.get('/', (_, res)=> {
    res.send("Bonjour daouda dadzada")
})
app.listen(port, ()=> {
    console.log("Serveur sur le port "+ port);
})
