import connection from "@/utils/database/connection"
import withdrawalModel from "@/utils/schema/Withdrawal"
import userModel from "@/utils/schema/userMode"
import axios from "axios"

export default async function handler(req, res) {
    await connection()

    if (req.method == 'GET') {


        try {

            const users = await userModel.find()
            const withdrawal = await withdrawalModel.find().sort({ _id: -1 })
            res.json({ users, withdrawal })


        } catch (error) {
            console.log(error)
        }

        


    }

}