const {Router} = require("express");

const expenseController =  Router();
const bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');
const {ExpenseModel} = require("../models/ExpenseModel")


expenseController.get("/",async (req, res)=>{
    
    const products =  await ExpenseModel.find({})
    
    res.send(products)
})


expenseController.post("/create", async(req, res)=>{
    const {amount, date } = req.body;
    const expense = new ExpenseModel({
       amount,
       date
    })
    try{
        await expense.save()
        res.send("notes created")
    }
    catch(err){
        console.log(err)
        res.send("something went wrong")
    }    
})


module.exports = {
    expenseController
}