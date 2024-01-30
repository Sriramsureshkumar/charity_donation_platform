const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://manojkumarse21:C8vJwq67eeVxQiH7@charityproject.zhvcaht.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Mongo DB connected");
}).catch((err)=>{
    console.log(err)
})

const Schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    fund:{
        type:String,
        // required:true
    }
})

const collection = new mongoose.model('fundraisers',Schema);
module.exports = collection