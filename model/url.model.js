const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ShortUrlSchema = new Schema({
    url: {
        type: String,
        require: true,
    },
    shortId: {
        type: String,
        require: true
    }
})

const ShortUrl = mongoose.model('shortUrl', ShortUrlSchema)

module.exports = {
    ShortUrl, ShortUrlSchema
}