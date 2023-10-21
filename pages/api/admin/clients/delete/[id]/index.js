import connection from "@/utils/database/connection";
import userModel from "@/utils/schema/userMode";

export default async function handler(req, res) {

    await connection()

    if (req.method == 'DELETE') {

        const user = await userModel.findByIdAndDelete({ _id: req.query.id })
        console.log(user)
        res.json({ status: true, massage: "user delete Successfull" })
    }
}