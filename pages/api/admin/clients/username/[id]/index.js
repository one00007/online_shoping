import connection from "@/utils/database/connection"
import userModel from "@/utils/schema/userMode"
export default async function handler(req, res) {

    await connection()

    if (req.method == 'POST') {

        try {
            await userModel.findByIdAndUpdate({ _id: req.query.id }, { username: req.body.username })
            res.json({ status: "ok" })

        } catch (error) {

        }


    }

}