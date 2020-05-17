const { Films } = require('../models/films');
const request = request('supertest');
const expect = require('chai').expect;
const app = require('../routes/index');


describe('save',() => {
    const filmsList = await Films.find();
    console.log(filmsList);
})