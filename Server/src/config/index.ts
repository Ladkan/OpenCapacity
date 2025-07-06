import dotnev from 'dotenv'

dotnev.config()

const config = {
    PORT: process.env.PORT || 8080,
    MONGO_URI: process.env.MONGO,
}

export default config