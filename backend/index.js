require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const router = express.Router()
const { PrismaClient } = require('./generated/prisma')
const prisma = new PrismaClient()

app.use(express.json());

const kudoboards = require('./routes/kudoboards')
const kudos = require('./routes/kudos')

app.use("/kudos", kudos)
app.use('/kudoboards', kudoboards)

app.get('/', ({req, res})=> {
    res.send("Defualt")
})

app.listen(PORT, () => {
    console.log(`Api woking on localhost:${PORT}`)
})

