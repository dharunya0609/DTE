const express = require('express')
const app = express()
const mongoose=require("mongoose")
const cors=require("cors")
const userRoutes = require('./routes/user.js')
const courseRoutes= require('./routes/course.js')
const DATABASE_URL = 'mongodb+srv://dharunya:dharun@cluster0.ensqawz.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then( () => {
    console.log("Connection open")
}).catch(err => {
    console.log("OOPS !! ERROR")
})

app.use(express.json({extended:true}))
app.use(express.urlencoded({ extended: true }));


app.use(cors())
app.use('/user',userRoutes)
app.use('/course',courseRoutes)
app.get('/',(req,res)=>{
    res.send('edu learn website')
})

app.listen(8080,()=> console.log("server is running"))

