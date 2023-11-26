const express = require('express')
const app = express()
const db = require("./config/index")
const routers = require('./routers')

routers(app)
//cấu hình file env
require('dotenv').config()
//kết nối db 
db.connect();


app.listen(process.env.PORT1,() => {
    console.log(`server is running on port http://${process.env.HOST1}:${process.env.PORT1}`)
})

