const Joi = require('joi')
const mongooose = require('mongoose')
const genreSchema = new mongooose.Schema({
    name:{
        type:String,
        required:true,
        minlength:5,
        maxlength:50
    }
})
const Genre = mongooose.model('Genre',genreSchema)
function validateGenre(genre){
const schema = {
    name:Joi.string().min(3).required()
}
return Joi.validate(genre,schema)
}
exports.genreSchema = genreSchema
exports.Genre = Genre
exports.validate = validateGenre
