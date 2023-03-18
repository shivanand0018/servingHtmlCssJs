const path=require('path')

exports.shop =(req, res, next) => {
    console.log('in the next middleware');
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
}