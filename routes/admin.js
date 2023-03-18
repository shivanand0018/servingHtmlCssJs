const express=require('express');
const path=require('path')
const router=express.Router();
const rootDir=require('../util/path')

router.get('/add-product', (req, res, next) => {
    console.log('Add product');
    res.sendFile(path.join(rootDir,'views','add-product.html'))
})
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/shop')
})

module.exports=router;