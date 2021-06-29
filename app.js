const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Postrouter = require('../server/routes/posts.routers')
const cors = require('cors');
require('dotenv').config();
const app = express();

mongoose.connect(`mongodb+srv://abdulkarem:${process.env.ATLAS_PW}@cluster0.7pfq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{useCreateIndex: true,useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false});
const db = mongoose.connection;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use('/posts',Postrouter)

const port = process.env.PORT || 8080
app.listen(port,function(){
    console.log(`server is running on port ${port}`)
})