const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const Account = require('../models/Account');

// Get all Datas
router.get('/', async(req,res) =>{
    try{
        const accounts = await Account.find();
        res.json(accounts);
    }catch(err){
        res.json({message : err});
}
});

// Get specific Data
router.get('/:accountuserWalletAddress',async(req,res) =>{
    try{
        const account = await Account.findOne({userWalletAddress:req.params.accountuserWalletAddress});
        res.json(account)
    }catch(err) {
        res.json({message: err})
    };
});


// Submit Data
router.post('/', async(req,res)=>{
    const Timestamp = Date();
    const account = new Account({
                accountNumber: req.body.accountNumber,
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                salutation:req.body.salutation,
                amountInUSD:req.body.amountInUSD,
                userWalletAddress:req.body.userWalletAddress,
                timeStamp:Timestamp
    });
    try{
    const savedAccount = await account.save()
    res.json(savedAccount);
    }catch(err){
        res.json({message : err});
    }
});

// Delete Data
router.delete('/:accountuserWalletAddress', async(req,res) =>{
    try{
        const removedAccount = await Account.findOneAndRemove({userWalletAddress:req.params.accountuserWalletAddress});
        res.json(removedAccount);
    }catch(err) {
        res.json({message: err});
    }
});

// Update Data
router.patch('/:accountuserWalletAddress', async(req,res) =>{
    try{
        const updatedAccount = await Account.updateOne(
            {userWalletAddress:req.params.accountuserWalletAddress},
            {$set:{accountNumber: req.body.accountNumber,
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                salutation:req.body.salutation,
                amountInUSD:req.body.amountInUSD,
                userWalletAddress:req.body.userWalletAddress
                
            }});
            res.json(updatedAccount);
    }catch(err) {
        res.json({message:err});
    }
})

module.exports =router;