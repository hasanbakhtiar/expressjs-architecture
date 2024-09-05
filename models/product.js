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
    }
})

const productValidate = (product) =>{
    const schema = new Joi.object({
        row:Joi.number(),
        imgCover: Joi.string(),
        img: Joi.array(),
        title:Joi.string(),
        price:Joi.number(),
        active:Joi.boolean()
    })

    return schema.validate(product);

}

const Product = mongoose.model('Product',productSchema);

module.exports = {Product,productValidate};