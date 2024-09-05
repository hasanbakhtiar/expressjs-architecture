const { default: mongoose } = require("mongoose");


const categorySchema = mongoose.Schema({
    title: {
        type:String
    }
})