const app = require("express")()
const cors = require('cors')
const bodyParser = require("body-parser")
const {HttpError} = require("./utils/utils")
const routes = require("./controllers")

const fs = require('fs')
const key = fs.readFileSync('./keys/key.pem')
const cert = fs.readFileSync('./keys/cert.pem')
const https = require('https')
const server = https.createServer({key: key, cert: cert }, app)


app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(routes)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use((err, req, res, next) => {
    if (err instanceof HttpError) {
        res.status(err.statusCode).json({
            error: true,
            message: err.errorMessage
        })
    } else {
        res.status(500).json({
            error: true,
            message: "Server error"
        })
    }
})

server.listen(5000, () => {
    console.log("Started listing on port 5000...")
})