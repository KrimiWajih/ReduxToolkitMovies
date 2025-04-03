const express = require("express");
const { config } = require("./configuration/config");
const cors = require("cors")
const MRouter = require("./router/router");
const Port = 5000;
const app = express()


app.use(express.json())

app.use(cors())
config()
app.use("/" ,MRouter)
app.listen(Port, ()=>  console.log(`Server is running on port ${Port}`))