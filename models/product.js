const { Schema, default: mongoose } = require('mongoose');
const Joi = require('joi');

const productSchema = Schema({
    row: Number,
    imgCover:String,
    img:[String],
    title: String,
    price: Number,
    active: {
        type: Boolean,
        default: true
    },
    // category:{type:Schema.Types.ObjectId, ref:"Category"}
    categories: [{type:Schema.Types.ObjectId, ref:"Category"}]
})

const productValidate = (product) =>{
    const schema = new Joi.object({
        row:Joi.number(),
        imgCover: Joi.string(),
        img: Joi.array(),
        title:Joi.string(),
        price:Joi.number(),
        active:Joi.boolean(),
        // category:Joi.array()
        categories:Joi.array()
    })

    return schema.validate(product);

}

const Product = mongoose.model('Product',productSchema);

module.exports = {Product,productValidate};