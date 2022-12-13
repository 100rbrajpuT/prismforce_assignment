const mongoose =  require("mongoose")

const expenseSchema = new mongoose.Schema({
    id : {type:String},
    amount : {type: Number, required : true},
    date:{ type:Date, default:Date.now}
})

const ExpenseModel = mongoose.model("expense", expenseSchema)

module.exports = {
    ExpenseModel
}