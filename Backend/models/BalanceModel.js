const mongoose =  require("mongoose")

const balanceSchema = new mongoose.Schema({
    id : {type:String},
    amount : {type: Number, required : true},
    date:{ type:Date, default:Date.now}
})

const BalanceModel = mongoose.model("balance", balanceSchema)

module.exports = {
    BalanceModel
}