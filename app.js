const express= require('express')

const productRoutes= require('./api/routes/products')
const orderRoutes= require('./api/routes/orders')

const app= express()

// use is a middleware
// app.use((req,res,next)=>{
//     res.status(200).json({
//         message:'it works'
//     });
// });

app.use('/products',productRoutes)
app.use('/orders',orderRoutes)

module.exports=app;