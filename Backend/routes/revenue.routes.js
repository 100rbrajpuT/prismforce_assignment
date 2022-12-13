const {Router} = require("express");

const revenueController =  Router();
const bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');
const {RevenueModel} = require("../models/RevenueModel")


revenueController.get("/",async (req, res)=>{
    
    const products =  await RevenueModel.find({})
    
    res.send(products)
})


revenueController.post("/create", async(req, res)=>{
    const {amount, date } = req.body;
    const revenue = new RevenueModel({
       amount,
       date
    })
    try{
        await revenue.save()
        res.send("notes created")
    }
    catch(err){
        console.log(err)
        res.send("something went wrong")
    }    
})


module.exports = {
    revenueController
}