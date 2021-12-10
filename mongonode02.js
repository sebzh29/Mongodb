// npm i mongodb --save

const express=require('express')
const app = express();

app.use(express.json())

const mongoclient = require('mongodb').MongoClient;
const url="mongodb://localhost:27017";

let db;

mongoclient.connect(url, function(err,client){
    if(err) { console.log("erreur") }
    console.log("connexion à mongodb")
    db = client.db("animaux")
})

// var boeuf = { name: "jojo", weight: 600, gender: "m" }

app.get('/insertAnimal', function(req,res) {
    try {
        db.collection("creche").insertOne({ name: "jojos", weight: 1600, gender: "f"})
        res.json({ok:'ok'})
    } catch(err) {
        res.json({res:err})
    }
})

app.get("/listAnimaux", (req,res) => {
    db.collection('creche').find({}).toArray(function(err,docs){
        res.json(docs)
    })
})

app.get("/listUnAnimalParLeNom/:nom", (req,res) => {
    db.collection('creche').find({ name:req.params.nom }).toArray(function(err,docs){
        res.json(docs)
    })
})

app.listen(8080, ()=>console.log("ecoute sur 8080"))


