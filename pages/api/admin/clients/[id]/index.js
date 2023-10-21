import connection from "@/utils/database/connection";
import tradeModel from "@/utils/schema/tradeModel";
import withdrawalModel from "@/utils/schema/Withdrawal";
import fundModel from "@/utils/schema/addFund";
import profileModel from "@/utils/schema/profilemode";
import userModel from "@/utils/schema/userMode";

export default async function handler(req, res) {

    await connection()



    if (req.method == 'GET') {

        const user = await userModel.findById({ _id: req.query.id })
        const addedFunds = await fundModel.find({ email: user.email }).sort({ _id: -1 })
        const withdrawal = await withdrawalModel.find({ email: user.email }).sort({ _id: -1 })
        const usertrades = await tradeModel.find({ userid: req.query.id }).sort({ _id: -1 })


        function calculateSuccessAmount(transactions) {
            let totalAmount = 0;

            for (const transaction of transactions) {
                if (transaction.status === "success") {
                    totalAmount += transaction.amount;
                }
            }

            return totalAmount;
        }
        const successAmount = calculateSuccessAmount(addedFunds);

        function profit(transactions) {
            let totalAmount = 0;

            for (const transaction of transactions) {
                if (transaction.result === 'profit') {
                    totalAmount += transaction.profit;
                }
            }

            return totalAmount;
        }
        const userprofit = profit(usertrades);

        function loss(transactions) {
            let totalAmount = 0;

            for (const transaction of transactions) {
                if (transaction.result === 'loss') {
                    totalAmount += transaction.loss;
                }
            }

            return totalAmount;
        }
        const userloss = loss(usertrades);


        function calcbrokrage(transactions) {
            let totalAmount = 0;

            for (const transaction of transactions) {
                if (transaction.brokrage) {
                    totalAmount += transaction?.brokrage;
                }
            }

            return totalAmount;
        }
        const brokrage = calcbrokrage(usertrades);

        function withdrawalCal(transactions) {
            let totalAmount = 0;

            for (const transaction of transactions) {
                if (transaction.status == 'success') {
                    totalAmount += transaction?.amount;
                }
            }

            return totalAmount;
        }
        const totalWithdrawal = withdrawalCal(withdrawal);


        const withdrawalHistory = await withdrawalModel.find({ email: user.email }).sort({ _id: -1 })
        const profile = await profileModel.findOne({ email: user.email })
        res.json({ user: user, addedFunds: addedFunds, withdrawalHistory: withdrawalHistory, userBalance: successAmount + userprofit - userloss - brokrage - totalWithdrawal, profile: profile, usertrades: usertrades })

    }



    if (req.method == 'POST') {

        const { stockName, stockDate, option, stockType, lot, lotSize, buyPrice, sellingPrice, type, profit, loss, result, status, ltp, brokrage, } = req.body
        const today = new Date()

            ;

        try {
            const newTrade = new tradeModel({ userid: req.query.id, stockName, stockDate, option, stockType, lot, lotSize, buyPrice, sellingPrice, type, profit, loss, result, status, ltp, brokrage, today })

            await newTrade.save()

            res.json({ status: true })

        } catch (error) {

            res.json({ error })

        }



    }


    if (req.method == 'PATCH') {

        try {

            await tradeModel.findByIdAndUpdate({ _id: req.body._id }, req.body)
            res.json({ status: "ok" })

        } catch (error) {

        }
    }

    if (req.method == 'DELETE') {
        try {
            await tradeModel.deleteOne({ _id: req.body.id })
            res.json({ status: "ok" })


        } catch (error) {

        }
    }
}