const express = require('express')
const bodyParser = require('body-parser')
require("dotenv").config();

const app = express()
const baseUrl = process.env.URL+process.env.PORT+'/api/'+process.env.VERSION

app
.use(bodyParser.json())
.use(
  bodyParser.urlencoded({
    extended: true,
  })
)



app.get(`/`, (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})
console.log(baseUrl);
 
app.listen(process.env.PORT, () => {
  console.log(`App running on :${baseUrl}`)
})
