const winston = require('winston')
const mongoose = require('mongoose')
module.exports = function(){
    mongoose.connect('mongodb://127.0.0.1:27017/vidly',{
useNewUrlParser:true,
useCreateIndex:true,
useUnifiedTopology:true

})
.then(()=>winston.info('connected to db'))


}