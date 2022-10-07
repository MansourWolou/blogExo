const express = require('express')
const bodyParser = require('body-parser')
const userFeature = require("./user/user.controller")
require("dotenv").config();

const app = express()
const baseUrl = process.env.URL+process.env.PORT+'/api/'+process.env.VERSION
const path = '/api/'+ process.env.VERSION 

app
.use(bodyParser.json())
.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
.use("/api/01/users",userFeature)

app.get("/", (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

 
app.listen(process.env.PORT, () => {
  console.log(`App running on :${baseUrl}`)
})

