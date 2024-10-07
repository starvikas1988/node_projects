const express = require("express")

const mongoose = require("mongoose")

const cors = require("cors")

const dotenv = require("dotenv")

//const bodyParser = require("body-parser");


const app = express();

app.use(cors());
app.use(express.json())

dotenv.config();

const router = require("./routes/auth.routes")

//app.use(bodyParser.json())  //either use body-parser or use cors and express.json() line 13,14 or use line 18,20

//app.use(bodyParser.urlencoded({extended:true}))


//const {v4:uuidv4} = require("uuid")

//db connection

mongoose.connect("mongodb://localhost:27017/amazon-shop")
.then(()=>{
    console.log("Connected to Mongo DB");
})
.catch((err) => console.error("Error connecting to Mongo DB",err) )

//stich the routes to the server

//require("./routes/auth.routes")(app)

app.use('/shoppers/api/v1/user',router)


app.listen(process.env.PORT,()=>{
    console.log(`Listining to port ${process.env.PORT}`)
})