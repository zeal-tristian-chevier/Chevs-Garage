const express = require('express')
const cors = require('cors')
const {projectRouter} = require('./server/routes/project.routes')
const port = 8000

require('./server/config/mongoose.config')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/', projectRouter)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

app.listen(port, () => console.log(`Listening on Port: ${port}`))