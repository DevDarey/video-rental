const express = require('express')
const morgan = require('morgan')
const genres = require('../routes/genres')
const customer = require('../routes/customers')
const rental = require('../routes/rentals')
const movie = require('../routes/movies')
const user = require('../routes/users')
const auth = require('../routes/auth')
const err = require('../middleware/error')

module.exports = function(app){
    app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(morgan('tiny'))
app.use('/api/genres',genres)
app.use('/api/customers',customer)
app.use('/api/rentals',rental)
//app.use('/api/movies',movie)
app.use('/api/users',user)
app.use('/api/auth',auth)
app.use(err)
}