require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const router = express.Router()
const { PrismaClient } = require('./generated/prisma')
const prisma = new PrismaClient()

const kudoboards = require('./routes/kudoboards')

app.use('/kudoboards', kudoboards)

app.get('/', ({req, res})=> {
    res.send("Defualt")
})

app.listen(PORT, () => {
    console.log(`Api woking on localhost:${PORT}`)
})

