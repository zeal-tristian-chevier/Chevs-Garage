const express = require('express')
const cors = require('cors')
const path = require('path')
const {projectRouter} = require('./server/routes/project.routes')
const port = process.env.PORT || 8000

require('./server/config/mongoose.config')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/', projectRouter)

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on Port: ${port}`))