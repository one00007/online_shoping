import connection from "@/utils/database/connection";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";
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

            const { name, amount, date, time, status, cancelReason } = req.body

            try {

                const newWithdrawal = new withdrawalModel(
                    {
                        email: session?.user?.email,
                        name,
                        amount,
                        date,
                        time,
                        status,
                        cancelReason
                    }
                )

                await newWithdrawal.save()

                res.json({ status: { isError: false, massage: "Withdrawal Request Added Succesfully" } })

            } catch (error) {
                console.log(error)
            }


        }



        if (req.method == 'GET') {

            try {

                const withdrawalRequests = await withdrawalModel.find({ email: session?.user?.email }).sort({ _id: -1 })
                res.json(withdrawalRequests)

            } catch (error) {
                console.log(error)
            }

        }
        if (req.method == 'PATCH') {

            try {

                const withdrawalRequests = await withdrawalModel.findByIdAndUpdate({ _id: req.body._id }, req.body)

                res.json("update successfull")

            } catch (error) {
                console.log(error)
            }

        }

    }



}