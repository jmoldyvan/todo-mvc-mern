import  cors  from "cors";
// const express = require('express')
import express  from "express"
const app = express()

// const mongoose = require('mongoose')
import mongoose  from "mongoose"

// const passport = require('passport')
// import passport  from "passport"

// const session = require('express-session')
import session  from "express-session"

// const MongoStore = require('connect-mongo')(session)
import * as connectMongo from 'connect-mongo';
const MongoStore = connectMongo(session);
// import MongoStore from 'connect-mongo'
// var mongoStore = MongoStore(session);

// const flash = require('express-flash')
import flash  from "express-flash"

// const logger = require('morgan')
import logger  from "morgan"

// const connectDB = require('./config/database')
import connectDB  from "./config/database.js"

// const mainRoutes = require('./routes/main')
import mainRoutes  from "./routes/main.js"

// const todoRoutes = require('./routes/todos')
import todoRoutes  from "./routes/todos.js"

// require('dotenv').config({path: './config/.env'})
import dotenv from "dotenv"
dotenv.config({ path: "./config/.env" });


// Passport config
// require('./config/passport')(passport)
import passport from "passport";
import passportConfig from "./config/passport.js";
passportConfig(passport);

connectDB()

app.use(cors());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
  
app.use('/', mainRoutes)
app.use('/todos', todoRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    