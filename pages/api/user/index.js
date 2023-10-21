import connection from "@/utils/database/connection";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import userModel from "@/utils/schema/userMode";
import fundModel from "@/utils/schema/addFund";
import tradeModel from "@/utils/schema/tradeModel";
import withdrawalModel from "@/utils/schema/Withdrawal";

export default async function handler(req, res) {

    const session = await getServerSession(req, res, authOptions)
    await connection()

    if (!session) {
        // if session is not available than this code is running
        res.status(401).json({ status: false, message: "You must be logged in." });

        return;
    } else {

        const user = await userModel.findOne({ email: session?.user?.email }).select({ password: 0, usertype: 0 })
        const withdrawal = await withdrawalModel.find({ email: session?.user?.email })
        const addedFunds = await fundModel.find({ email: session?.user?.email }).sort({ _id: -1 })
        const usertrades = await tradeModel.find({ userid: user._id }).sort({ _id: -1 })


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





        res.json({ user, successAmount: successAmount - userloss + userprofit - brokrage - totalWithdrawal, usertrades, totalProfit: userprofit, totalLoss: userloss })



    }



}