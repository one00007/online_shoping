import connection from "@/utils/database/connection";
import offerModel from "@/utils/schema/offer";


export default async function handler(req, res) {

    await connection()



    if (req.method == 'DELETE') {

        const offers = await offerModel.findByIdAndDelete({ _id: req.query.id })

        res.json({ status: "ok" })

    }

}