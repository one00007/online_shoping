import connection from "@/utils/database/connection";
import BalanceModel from "@/utils/schema/tradeModel";
import fundModel from "@/utils/schema/addFund";

export default async function handler(req, res) {

    await connection()



    if (req.method == 'PATCH') {



        const result = await fundModel.findOneAndUpdate({ _id: req.query.transactionId }, req.body)

        const balance = await BalanceModel.findOne({ userid: req.query.id })

        if (req.body.status == "success") {
            await BalanceModel.findOneAndUpdate({ userid: req.query.id, balance: balance.balance + result.amount })

        } else (
            await BalanceModel.findOneAndUpdate({ userid: req.query.id, balance: balance.balance - result.amount })

        )
        res.json({ massage: "update Successfull", status: "ok" })


    }
}