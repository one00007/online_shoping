import connection from "@/utils/database/connection";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";
import fundModel from "@/utils/schema/addFund";
import withdrawalModel from "@/utils/schema/Withdrawal";

export default async function handler(req, res) {

    const session = await getServerSession(req, res, authOptions)
    await connection()

    if (!session) {
        // if session is not available than this code is running
        res.status(401).json({ status: false, message: "You must be logged in." });

        return;
    } else {



        if (req.method == 'POST') {

            const { name, amount, date, time, status } = req.body

            try {

                const newWithdrawal = new fundModel(
                    {
                        email: session?.user?.email,
                        name,
                        amount,
                        date,
                        time,
                        status
                    }
                )

                const result = await newWithdrawal.save()
                console.log(result)

                res.json({ status: { isError: false, massage: "Amount Added Succesfully" } })

            } catch (error) {
                console.log(error)
            }


        }



        if (req.method == 'GET') {

            try {

                const paymentHistory = await fundModel.find({ email: session?.user?.email }).sort({ _id: -1 })
                res.json(paymentHistory)

            } catch (error) {
                console.log(error)
            }

        }

    }



}