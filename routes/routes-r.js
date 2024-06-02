const router = require('express').Router();

const { getProducts } = require("./../controllers/controll-product");

router.get("/", getProducts);

router.get('/tables', getProducts);

module.exports = router;