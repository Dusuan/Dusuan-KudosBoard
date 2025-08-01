require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const router = express.Router()
const { PrismaClient } = require('./generated/prisma')
const prisma = new PrismaClient()
const cors = require('cors')

app.use(cors())
app.use(express.json());

const kudoboards = require('./routes/kudoboards')
const kudos = require('./routes/kudos')
const kudocomments = require('./routes/kudocomments')

app.use("/kudos", kudos)
app.use('/kudoboards', kudoboards)
app.use('/kudocomments', kudocomments)

app.get('/', ({req, res})=> {
    res.send("Defualt")
})

app.listen(PORT, () => {
    console.log(`Api woking on localhost:${PORT}`)
})

