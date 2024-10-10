import mongoose from 'mongoose'


const DBConnection = async()=>{
    const DB_URL= `mongodb+srv://bishtpoojainbox:P00jA7@cluster0.ixhkn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
try{
await mongoose.connect(DB_URL, )
console.log("database connect")
}
catch(err){
    console.log("error while connecting with the database", err.message)
}
}
export default DBConnection;