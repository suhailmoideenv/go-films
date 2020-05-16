let mongoose = require('mongoose');

let filmsSchema = mongoose.Schema({
    name: String,
    description: String,
    release_date: Date,
    rating: Number,
    ticket_price: Number,
    country: String,
    Genre: String,
    photo: String,
    comments: [{userId:String, comment:String}]
}, {collection: 'films'})

let Films = mongoose.model('Films',filmsSchema)

module.exports = Films;