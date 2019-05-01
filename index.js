const express= require('express')
const { routes }= require('./config/routes')

const app=express()
const port=3005

app.use('/',routes)

app.listen(port,function(){

    console.log('listening on port',port)
})
