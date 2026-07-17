const mongosse = require('mongoose')

async function connectDB(){
    try{
        await mongosse.connect(process.env.URI)
        console.log('db connected')
    } catch(error){
        await mongoose.connect
    }
}
module.exports=connectDB

