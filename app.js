const express = require('express');
const app = express();
const path=require('path')

const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded())
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','pagenotfound.html'))
})
app.listen('3000')

