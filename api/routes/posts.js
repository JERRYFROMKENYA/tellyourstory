const router = require('express').Router()
const User =require('../models/User')
const Post =require('../models/Post')
const {ignore} = require("nodemon/lib/rules");


//CREATE NEW POST
router.post("/", async (req,res)=>{
    const newPost = new Post(req.body)
    try
    {
        const savedPost= await newPost.save();
        res.status(200).json(savedPost)
    }
    catch (e) {
        res.status(500).json(e)

    }

})

//UPDATE
router.put("/:id",async(req,res)=>
{
   try {
       const post =await Post.findById(req.params.id)
       if(post.username===req.body.username)
       {
            const updatedPost = await Post.findByIdAndUpdate(req.params.id,
                {$set: req.body},
                {new:true}
                )
           res.status(200).json(updatedPost)
       }
       else
       {
           res.status(401).json("You can only update your own posts.")

       }
   }
   catch (e) {
       res.status(500).json(e)
   }
})

//DELETE POST
router.delete("/:id",async(req,res)=>
{
    try {
        const post =await Post.findById(req.params.id)
        if(post.username===req.body.username)
        {
            await Post.findByIdAndDelete(req.params.id)
            res.status(200).json("Post has been deleted")
        }
        else
        {
            res.status(401).json("You can only delete your own posts.")

        }
    }
    catch (e) {
        res.status(500).json(e)
    }
})
//DEL POST


//Get POST
router.get("/:id", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post)
        {
            res.status(401).json("Post not found")
        }
        else
        {
            res.status(200).json(post)
        }


    }
    catch (e) {
        res.status(500).json(e)

    }
})

//Get all Posts
router.get("/", async (req,res)=>{
    try{
        const posts = await Post.find();
        if(!posts)
        {
            res.status(401).json("No Posts yet")
        }
        else
        {
            res.status(200).json(posts)
        }


    }
    catch (e) {
        res.status(500).json(e)

    }
})
router.get("/?", async (req,res)=>{
    const username=req.query.user
    const category=req.query.catname

    try{

        let posts;
        if(username)
        {
            posts= await Post.find({username})
        }
        else if(category)
        {
            posts= await Post.find({category})
            // res.status(200).json(posts)
        }
        else
        {
            posts= "Oops!  "
        }


    }
    catch (e) {
        res.status(500).json(e)

    }
})


module.exports = router