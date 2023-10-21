import connection from "@/utils/database/connection";
import tradeModel from "@/utils/schema/tradeModel";


export default async function handler(req, res) {

    await connection()

    if (req.method == 'DELETE') {
        try {
            console.log("working")
            await tradeModel.deleteOne({ _id: req.query.id })
            res.json({ status: "ok" })


        } catch (error) {

        }
    }
}