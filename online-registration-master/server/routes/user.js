const express=require('express')
const {signUp,login,editProfile,setMentor,myDetails} = require('../controllers/user')
const router = express.Router();
router.get('/:id',myDetails)
router.post('/signup',signUp)
router.post('/login',login)
router.patch("/mentor",setMentor)
router.patch("/profile",editProfile)

module.exports=router;