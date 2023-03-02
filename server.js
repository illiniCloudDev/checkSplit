const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
// const todoRoutes = require('./routes/todos')

require('dotenv').config({path: './config/.env'})

connectDB()