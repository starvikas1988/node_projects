const user_model = require("../models/user.model")

const jwt = require("jsonwebtoken")

const secret_key = process.env.SECRET_KEY

//create a mw to check if the request body is proper and correct

const verifySignUpBody = async(req,res,next)=>{
    try{
        if(!req.body.name){
            return res.send({
                message:"Failed! name was not provided in request body"
            }).status(400)
        }

        if(!req.body.email){
            return res.status(400).send({
                message:"Failed! email was not provided in request body"
            })
        }

        if(!req.body.userId){
            return res.status(400).send({
                message:"Failed! UserId was not provided in the request body"
            })
        }

        //check if user already exists

        const user = await user_model.findOne({userId:req.body.userId})

        if(user){
            return res.status(400).send({
                message:"Failed! User with same userId is already present"
            })
        }
        next()
    }catch(err){
        console.error("Error while validating the request Object",err)

        res.status(500).send({
            message:"Error while validating the request Object"
        })
    }
}

//verify signin body

const verifySigninBody = (req,res,next)=>{
    if(!req.body.userId){
        return res.status(400).send({
            message:"UserId is not provided"
        })
    }

    if(!req.body.password){
        return res.status(400).send({
            message:"Password is not provided"
        })
    }
    next()
}

//verify token

    const verfyToken = (req,res,next)=>{
        //const token = req.headers["x-access-token"]
        const tokencheck = req.headers["authorization"]

        const extractToken = tokencheck.split(' ')[1] ; //[Bearer, <token>] split the string with a space to get an array with the token at index 1 

        if(!extractToken){
            return res.status(403).send({
                message:"No Token found:Unauthorized"
            })
        }

        //verify the token

        jwt.verify(extractToken,secret_key,async(err,decoded)=>{
            if(err){
                return res.status(401).send({
                    message:"Unauthorized!"
                })
            }

            const user = await user_model.findOne({userId:decoded.id})

            if(!user){
                return res.status(400).send({
                    message:"Unauthorized,this user for this token doesn't exists"
                })
            }

            //set the user info in the request body

            req.user = user

            next()
        })
}

module.exports = {
    verifySignUpBody,
    verifySigninBody,
    verfyToken
}