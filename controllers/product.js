const { Product, productValidate } = require("../models/product");

// ================================================


exports.alldeleteProduct = async (req, res) => {
    const product = await Product.deleteMany();
    res.send(product);
}

// ================================================

exports.addproduct = async (req, res) => {
    const { error } = productValidate(req.body);
    if (error) {
        res.send(error.message);
    } else {

        let filesObj = req.files;
        filesObjLength = Object.keys(filesObj).length;

        if (filesObjLength === 0) {
            const product = new Product(req.body);
            const result = await product.save();
            res.send(result);


        }else{
            const product = new Product(req.body);
            const uploadFile = [];
            req.files.img.map(async item=>{
                uploadFile.push(item.path)
            })
            product.img = uploadFile;
            product.imgCover = req.files.imgCover[0].path;

            const result = await product.save();
            res.send(result);
            
        }
    }
}


// ================================================


exports.editProduct = async (req, res) => {

    const { error } = productValidate(req.body);
    if (error) {
        res.send(error.message);
    } else {

        let filesObj = req.files;
        filesObjLength = Object.keys(filesObj).length;

        if (filesObjLength === 0) {

            const { title, price,  active } = req.body;
            const product = await Product.findById(req.params.id);
        
            if (product) {
                product.title = title;
                product.price = price;
                product.active = active;
                const updateProduct = await product.save();
                res.send(updateProduct);
        
            } else {
                res.status(404);
        
            }
        }else{

            const { title, price,  active } = req.body;
            const product = await Product.findById(req.params.id);
            
            if (product) {
                const uploadFile = [];
                req.files.img.map(async item=>{
                    uploadFile.push(item.path)
                })
                product.img = uploadFile;
                product.imgCover = req.files.imgCover[0].path;
                product.title = title;
                product.price = price;
                product.active = active;
                const updateProduct = await product.save();
                res.send(updateProduct);
        
            } else {
                res.status(404);
        
            }
        }

    

    }
        



}

// ================================================


exports.listproduct = async (req, res) => {
    const product = await Product.find().populate("category","title -_id");
    // const product = await Product.find();

    res.send(product);
}

// ================================================


exports.singleproduct = async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id });

    if (!product) {
        res.status(404).send("no product");
    }
    res.send(product);

}


