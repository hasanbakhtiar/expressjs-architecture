const { Category, categoryValidate } = require("../models/category")

exports.addCategory  = async(req,res)=>{
        const {error} = categoryValidate(req.body);
        if (error) {
            res.send(error.messages)
        }else{
            const category =  new Category(req.body);
            const result = await category.save();
            res.send(result);
        }
}

exports.listCategory = async(req,res)=>{
    const category = await Category.find();
    res.send(category);
}

exports.allDeleteCategory = async(req,res)=>{
    const category = await Category.deleteMany();
    res.send(category);
}