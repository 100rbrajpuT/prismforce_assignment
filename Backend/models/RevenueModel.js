const mongoose =  require("mongoose")

const revenueSchema = new mongoose.Schema({
    id : {type:String},
    amount : {type: Number, required : true},
    date:{ type:Date, default:Date.now}
})

const RevenueModel = mongoose.model("revenue", revenueSchema)

module.exports = {
    RevenueModel
}