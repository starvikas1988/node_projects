const user_model = require("../models/user.model")
const bcrypt = require("bcryptjs")

const jwt = require("jsonwebtoken")

const secret_key = process.env.SECRET_KEY;


//logic to register a user
exports.signup = async (req,res)=>{
//logic to create a user

const request_body = req.body

const userObject = {
    name: request_body.name,
    userId: request_body.userId,
    email: request_body.email,
    userType: request_body.userType,
    password: bcrypt.hashSync(request_body.password,8)
}

try{
    const user_created = await user_model.create(userObject)

    const res_body = {
        name: user_created.name,
        userId:user_created.userId,
        email:user_created.email,
        userType:user_created.userType,
        createdAt: user_created.createdAt,
        updatedAt: user_created.updatedAt,
    }

     res.status(201).send(res_body)

   // res.json(res_body).status(201)
}catch(err){
    console.error("Error while registering the user",err)

    res.send({
        message:"Some error happened while registering the user"
    }).status(500)
}

}

//login method

exports.signin = async (req,res)=>{
    const user = await user_model.findOne({userId : req.body.userId})

    if(user == null){
        return res.status(401).send({
            message:"UserId Passed in not valid"
        })
    }
    //password check

    const isPasswordValid = bcrypt.compareSync(req.body.password,user.password)

    if(!isPasswordValid){
        return res.status(401).send({
            message:"Wrong Password Passed"
        })
    }

    //create jwt token and return

    const token = jwt.sign({id:user.userId},secret_key,{
        expiresIn:120
    })

    res.send({
        name:user.name,
        userid:user.userId,
        email:user.email,
        userType:user.userType,
        accessToken:token
    }).status(201)


}

exports.getUserDetails = async(req,res)=>{
    res.send({
        message:"Working Fine"
    }).status(200)
}