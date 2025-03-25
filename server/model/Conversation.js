import mongoose from "mongoose";

const Conversation=new  mongoose.Schema({
    members:{
        type:Array
    }
})