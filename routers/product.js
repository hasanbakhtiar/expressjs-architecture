const express = require('express');
const { addproduct, listproduct, singleproduct, editProduct, alldeleteProduct } = require("../controllers/product");
const upload = require("../middleware/uploadFile");
const router = express.Router();


router.post('/add',upload.fields([{ name: 'imgCover', maxCount: 1 }, { name: 'img', maxCount: 8 }]), addproduct);
router.delete('/alldelete',alldeleteProduct);
router.put('/edit/:id',upload.fields([{ name: 'imgCover', maxCount: 1 }, { name: 'img', maxCount: 8 }]),editProduct);


router.get('/:id', singleproduct);
router.get('/', listproduct);

module.exports = router;