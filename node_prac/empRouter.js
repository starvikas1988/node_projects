const express = require('express');

const app = express();

function logger(req,res,next){
    console.log("logger middleware");
    next();
}

const empRouter =  express.Router();

empRouter.use(logger);

empRouter.get('/',(req,res)=>{
    res.send("User vikas");
})

empRouter.get('/details',(req,res)=>{
    res.send("User details vikas");
})

module.exports = empRouter;
