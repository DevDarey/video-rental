const Joi = require('joi')
const mongooose = require('mongoose')
const {genreSchema} = require('./genre')
const Movie = mongooose.model('Movies',new mongooose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        minlength:5,
        maxlength:255
    },
    genre:{
        type:genreSchema,
        required:true
    },
    numberInStock:{
        type:Number,
        required:true,
        min:0,
        max:255
    },
    dailyRentalRate:{
        type:Number,
        required:true,
        min:0,
        max:255
    }
}))
function validateMovie(movie){
    const schema = {
        title:Joi.string().min(0).max(50).required(),
        genreId:Joi.objectId().required(),
        numberInStock:Joi.string().required().min(0),
        dailyRental:Joi.number().min(0).required()

    }
    return Joi.validate(movie,schema)

}
exports.Movie = Movie
exports.validate = validateMovie