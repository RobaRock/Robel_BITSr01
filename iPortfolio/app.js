
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mainroutes = require('./route/mainroute')

const app = express()
const url = "mongodb://127.0.0.1:27017/portfolio";


mongoose.connect(url)
.then(result=>{
  console.log("Database Connected")
  app.listen(3000)
} )
.catch(err => console.log(err))

app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/assets/'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));


app.use(mainroutes);


