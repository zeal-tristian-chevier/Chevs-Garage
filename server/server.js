const express = require('express')
const cors = require('cors')
const {projectRouter} = require('./routes/project.routes')
const port = 8000

require('./config/mongoose.config')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/', projectRouter)

app.listen(port, () => console.log(`Listening on Port: port`))