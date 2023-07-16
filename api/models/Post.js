const mongoose=require("mongoose")

const PostSchema =new mongoose.Schema({
        Title:{
            type:String,
            required:true,
            unique: true
        },
        description:
            {
                type:String,
                required:true,
                unique: false
            },
        photo:
            {
                type:String,
                default:"",
            },
    username:
        {
            type:String,
            required:true,
        },
    categories:
        {
            type:Array,
            default: ["FSN"]
        }

    },
    {timestamps: true})

module.exports= mongoose.model("Post", PostSchema)