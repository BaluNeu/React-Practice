//require('dotenv').config();

const express = require('express');

const app = express();

const mongoose = require('mongoose')



const uri = "mongodb+srv://srinivasulu:srinivasulu@todoapp.i6ojwlb.mongodb.net/?retryWrites=true&w=majority"

//mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true});


async function connect(){
    try{
        await mongoose.connect(uri)
        console.log('mongodb connected successfully')
    }catch(e){
        console.error(e)  
}
}

connect();

const db = mongoose.connection;

app.use(express.json());

//app.set('view engine', 'ejs');

const todoAppRouter = require('./routes/todoApp.js')

app.use('/todoApp', todoAppRouter );

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'))

app.listen(5001, ()=> {console.log('server listening to 5001....')});

