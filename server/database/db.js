import mongoose from 'mongoose'


const DBConnection = async()=>{
    const DB_URL= process.env.MONGO_URI
try{
await mongoose.connect(DB_URL, )
console.log("database connect")
}
catch(err){
    console.log("error while connecting with the database", err.message)
}
}
export default DBConnection;