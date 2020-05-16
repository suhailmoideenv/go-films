let express = require('express')
let bodyParser = require('body-parser')
let path = require('path')
let mongoose = require('mongoose')
let cors = require('cors')

let Films = require('../models/films.js')

let app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())


var mongoDB = 'mongodb+srv://db-admin:qw!@er$7@cluster0-4yzyb.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });


module.exports.filmsSave = function (req, res) {
    let films = new Films({
        name: req.body.name,
        description: req.body.description,
        release_date: req.body.release_date,
        rating: req.body.rating,
        ticket_price: req.body.ticket_price,
        country: req.body.country,
        Genre: req.body.Genre,
        photo: req.body.photo
    })

    films.save((err, result) => {
        if (err) { console.log(err) }
        else { res.json(result) }
    })
}

module.exports.filmsGet = function (req, res) {
    Films.find((err, result) => {
        if (err) { console.log(err) }
        else { res.json(result) }
    })
}

module.exports.getFilmDetails = function (req, res) {
    Films.findOne({ 'name': req.body.name }).exec((err, data) => {
        if (err) { console.log(err) }
        else { res.json(data) }
    })
}


module.exports.updateComments = function (req, res) {
    Films.findById(req.body.id, function (err, films) {
        if (err) { console.log(err); }
        films.comments.push(req.body.comments);
        films.save((err, result) => {
            if (err) { console.log(err) }
            else { res.json(result) }
        })
    })
}