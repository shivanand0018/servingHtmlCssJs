const path=require('path');
const express=require('express');
const shop=express.Router();
const controller=require('../controllers/products');

shop.get('/', controller.shop )
shop.get('/contactUs', (req, res, next) => {
    console.log('in the next middleware');
    res.sendFile(path.join(__dirname,'../','views','contactUs.html'))
})

module.exports=shop;
