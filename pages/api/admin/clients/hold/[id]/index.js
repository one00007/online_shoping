import connection from "@/utils/database/connection";
import userModel from "@/utils/schema/userMode";

export default async function handler(req, res) {

    await connection()

    if (req.method == 'PATCH') {

        const user = await userModel.findById({ _id: req.query.id })
        await userModel.findByIdAndUpdate({ _id: req.query.id }, { status: !user.status })
        const updated = await userModel.findById({ _id: req.query.id })

        res.json({ user: updated, status: true, massage: "Update Sucessfull" })
    }
}