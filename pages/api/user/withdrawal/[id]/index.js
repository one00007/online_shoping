import connection from "@/utils/database/connection";
import withdrawalModel from "@/utils/schema/Withdrawal";

export default async function (req, res) {

    await connection()

    if (req.method == 'DELETE') {

        try {

            await withdrawalModel.findByIdAndDelete({ _id: req.query.id })
            res.json({ isError: true, massage: "Withdrawal Request Canceled" })

        } catch (error) {
            res.json({ isError: true, massage: error })
        }

    }

}