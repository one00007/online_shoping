import mongoose from "mongoose";

const tradeSchema = mongoose.Schema({

    userid: { type: String, require: true },
    stockName: { type: String, require: true },
    stockDate: String,
    option: Number,
    stockType: String,
    lot: Number,
    lotSize: Number,
    buyPrice: Number,
    sellingPrice: Number,
    type: String,
    profit: Number,
    loss: Number,
    result: String,
    status: String,
    ltp: Number,
    brokrage: Number,
    today: String,
})


const tradeModel = mongoose.models.tradeModel || mongoose.model("tradeModel", tradeSchema)


export default tradeModel