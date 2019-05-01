const express=require('express')
const router=express.Router()


const { contactsRouter } = require ('../app/controllers/ContactsController')
const { usersRouter } = require ('../app/controllers/UsersController') 


router.use('/users',usersRouter)
router.use('/contacts',contactsRouter)

module.exports ={

    routes : router
}


