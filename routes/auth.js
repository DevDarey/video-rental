const express = require('express')
const Joi = require('joi')
const _ = require('lodash')
const bcrypt = require('bcrypt')
//const config = require('config')
const{User} = require('../model/user')
const router = express.Router()
router.get('/', async(req,res)=>{
    const user = await  User.find().sort('name')
    res.send(user)

})
router.post('/',async(req,res)=>{
    const{error} = validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)
   let user = await User.findOne({email:req.body.email})
   if(!user) return res.status(400).send('Invalid email or password')
    const validPass = await bcrypt.compare(req.body.password,user.password)
    if(!validPass) return res.status(400).send('Invalid email or password')
    const token = user.generateAuthToken()
   
    res.send(token)
    


})
function validate(req){
    const schema = {
        email:Joi.string().min(0).max(255).required().email(),
        password:Joi.string().min(0).max(255).required()

    }
    return Joi.validate(req,schema)
} 

module.exports = router