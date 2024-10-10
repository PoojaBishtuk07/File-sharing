import express from "express"
import router from "./routes/routes.js";
import cors from "cors"
import DBConnection from "./database/db.js";
import path from "path"
const _dirname = path.resolve()
const app = express()
app.use('/', router)
const PORT = 8000;
const corsOptions = {
    origin:"https://file-sharing-wd2q.onrender.com",
    Credentials:true
}

app.use(cors(corsOptions));
DBConnection()
// static files
app.use(express.static(path.join(_dirname, "/client/build")))
app.get("*",(req,res)=>{
 res.sendFile(path.resolve(_dirname, '/client/build/index.html'))})


app.listen(PORT,()=>
console.log(`Server is running at ${PORT} PORT`))
  