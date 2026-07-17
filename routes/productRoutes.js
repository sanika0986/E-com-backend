const express = require('express')
const { addProduct, getProducts, deleteProduct } = require('../controllers/productController')
const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')
const { updateProducts } = require('../controllers/productController')


const router = express.Router()

router.post('/addproduct',authMiddleware,adminMiddleware,addProduct)
router.get('/getProduct',getProducts)
router.delete('/deleteproduct/:id',authMiddleware,adminMiddleware,deleteProduct)
router.put('/updateProduct/:id',updateProducts)

module.exports = router