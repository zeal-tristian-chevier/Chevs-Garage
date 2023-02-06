const express = require('express')
const cors = require('cors')
const path = require('path')
const {projectRouter} = require('./routes/project.routes')
const port = process.env.PORT || 8000

require('./config/mongoose.config')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/api', projectRouter)

// if (process.env.NODE_ENV === "production") {
//   console.log("PRODUCTION MODE ACTIVE");

//   app.use(express.static(path.join(__dirname, "/client/build")))

//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './client/build','index.html'));
//   })
// }



app.listen(port, () => console.log(`Listening on Port: ${port}`))
