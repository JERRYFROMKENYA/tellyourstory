const router = require('express').Router()
const User =require('../models/User')
const bcrypt =require('bcrypt')

//Register
router.post("/register",async(req,res)=>
{
    try {
        const salt=await bcrypt.genSalt(10)
        const hashedPass= await bcrypt.hash(req.body.password,salt)
        const newUser = new User(
            {
                username: req.body.username,
                email: req.body.email,
                password: hashedPass
            }
        )
        const user = await newUser.save();
        const {password, ...others}=user._doc
        res.status(200).json(others);
    }


    catch (err)
    {
        res.status(500).json(err)
    }
})

//Login
router.post("/login", async(req,res)=>{
    try
    {
        const user =await User.findOne({username:req.body.username})
        !user && res.status(400).json("Wrong Credentials!")

        const validated= await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(400).json("Wrong Credentials!")

        const {password, ...info}=user._doc
        res.status(200).json(info)


    }
    catch (e) {
        res.status(500).json(e)

    }
})


module.exports = router