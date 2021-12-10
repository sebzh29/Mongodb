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
    db = client.db("mydb")


    let contact = { name: "Openlab", adresse:"9 rue rousseau"}

    try {
        db.collection("adresses").insertOne(contact)
    } catch (e) {
        console.log(e)
    }

})