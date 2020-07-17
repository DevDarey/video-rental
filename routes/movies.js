const mongoose = require('mongoose')
const{Movie,validate}= require('../model/movie')
const {Genre} = require('../model/genre')
const express = require('express')
const router = express.Router()
router.get('/',async(req,res)=>{
    const movies = await Movie.find().sort('name')
    res.send(movies)

})
router.post('/',async(req,res)=>{
    const{error} = validate(req.body)
    if(error) return res.status(404).send(error.details[0].message)
    const genre =  await Genre.findById(req.body.id)
    if(!genre) return res.status(400).send('Invalid Genre')
    let movie = new Movie({
        title:req.body.title,
        genre:{
            _id:genre._id,
            name:genre.name
        },
        numberInStock:req.body.numberInStock,
        dailyRentalRate:req.body.dailyRentalRate
    })
    movie = await movie.save()


})