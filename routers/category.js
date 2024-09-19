const express = require('express');
const { listCategory, addCategory, allDeleteCategory } = require('../controllers/category');
const router = express.Router();


router.get('/',listCategory);
router.post('/',addCategory);
router.post('/alldelete',allDeleteCategory);

module.exports = router;