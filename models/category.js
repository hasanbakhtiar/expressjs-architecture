const Joi = require("joi");
const { default: mongoose } = require("mongoose");


const categorySchema = mongoose.Schema({
    row:Number,
    title: String
})


const categoryValidate = (category) =>{
    const schema = new Joi.object({
        row:Joi.number(),
        title:Joi.string()
    })

    return schema.validate(category);
}

const Category = mongoose.model("Category",categorySchema);

module.exports = {Category,categoryValidate}