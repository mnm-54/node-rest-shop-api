const express= require('express')
const router= express.Router()

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'handleing get request for products'
    });
});

router.post('/',(req,res,next)=>{
    const product={
        name:req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message:'handleing post request for products',
        createdProduct:product
    });
});

router.get('/:productId',(req,res,next)=>{
    const id= req.params.productId;
    if (id ==="special"){
        res.status(200).json({
            message:'discovered the special id',
            id: id
        });
    }else{
        res.status(200).json({
            message:'got a id',
            id:id
        });
    }
});

router.patch('/:productId',(req,res,next)=>{
    const id= req.params.productId;
    res.status(200).json({
        message:'updated product',
        id: id
    });
});

router.delete('/:productId',(req,res,next)=>{
    const id= req.params.productId;
    res.status(200).json({
        message:'deleted product',
        id: id
    });
});

module.exports=router