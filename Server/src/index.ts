import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import mongoose, { ConnectOptions } from 'mongoose'
import router from './router'
import config from './config'

const app = express();

app.use(cors({
    credentials: true,
    origin: true,
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const server = http.createServer(app)

server.listen(config.PORT, () => {
    console.log('Server running on http://localhost:'+config.PORT)
})

const clientOptions: ConnectOptions = {
    dbName: "OpenCapacity",
    appName: "Cluster0",
    serverApi: {
        version: '1',
        strict: true,
        deprecationErrors: true,
    }
}

mongoose.Promise = Promise
mongoose.connect(config.MONGO_URI,clientOptions)
mongoose.connection.on('error', (error: Error) => console.log(error))
app.use("/", router())
