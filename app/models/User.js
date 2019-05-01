const mongoose=require('mongoose')
const validator = require ('validator')

const Schema=mongoose.Schema

const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique : true ,
        minlength : 5

    },

    email : {
        type : String,
        required : true,
        unique : true,
        validate: {

            validator: function(value){

                    return validator.isEmail(value)
                },
            message : function(){
                    return 'invalid email format'
                }
        }

    },

    password : {
        type: String,
        required : true,
        minlength : 8,


    },
})

const User=mongoose.model('User',userSchema)

module.exports={
    User
}
