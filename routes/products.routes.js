const { Router } = require('express');
const { productsGet, productsPost, productsPut, productsDelete, } = require('../controllers/products.controllers');
const router = Router();

router.get('/products', productsGet);

router.post('/products', productsPost);

router.put('/products', productsPut);

router.delete('/products', productsDelete);

module.exports = router; 