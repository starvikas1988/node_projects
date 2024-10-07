//const auth_controller = require("../controllers/auth_controller")

// const {signup,signin,getUserDetails} = require("../controllers/auth_controller")

// //const authMW =require("../middlewares/auth.mw")

// const {verifySignUpBody,verifySigninBody,verfyToken} = require("../middlewares/auth.mw")

// module.exports = (app)=>{
//     app.post("shoppers/api/v1/auth/signup",[verifySignUpBody],signup)

//     app.post("shoppers/api/v1/auth/signin",[verifySigninBody],signin)

//     app.get("shoppers/api/v1/auth/getUserDetails",[verfyToken],getUserDetails)
// }

var express = require("express")

const {signup,signin,getUserDetails} = require("../controllers/auth_controller")

const {verifySignUpBody,verifySigninBody,verfyToken} = require("../middlewares/auth.mw")

const router = express.Router();

router.post('/signUp',verifySignUpBody,signup)

router.post('/login',verifySigninBody,signin)

router.get('/getUserDetails',verfyToken,getUserDetails) //middleware applied

module.exports = router;