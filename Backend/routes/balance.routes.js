const {Router} = require("express");

const balanceController =  Router();
const bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');
const {BalanceModel} = require("../models/BalanceModel")


balanceController.get("/",async (req, res)=>{
    
    const products =  await BalanceModel.find({})
    
    res.send(products)
})


balanceController.post("/create", async(req, res)=>{
    const {amount, date } = req.body;
    const balance = new BalanceModel({
       amount,
       date
    })
    try{
        await balance.save()
        res.send("notes created")
    }
    catch(err){
        console.log(err)
        res.send("something went wrong")
    }    
})


module.exports = {
    balanceController
}