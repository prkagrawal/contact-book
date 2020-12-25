const mongoose = require('mongoose')
const uri = process.env.MONGO_URI

const connectDb = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        console.log('Db connected...')
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectDb