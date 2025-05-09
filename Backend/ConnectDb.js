const mongoose=require('mongoose')

//Mongo Connection Url
const mongoURL='mongodb://127.0.0.1:27017/Music'

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
})


//Go the Default Connection
const db=mongoose.connection

//Define the event listeners for Database COnnection

db.on("connected", ()=>{
    console.log("Connected to Mongodb")
})

db.on('error', (err)=>{
    console.log("MongoDB Connection Error", err)
})

db.on('disconnected', ()=>{
    console.log("MongoDb Dissconnected")
})


module.exports=db