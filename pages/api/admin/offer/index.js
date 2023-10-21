import connection from "@/utils/database/connection";
import offerModel from "@/utils/schema/offer";


export default async function handler(req, res) {

    await connection()


    if (req.method == 'POST') {


        const offer = new offerModel(req.body)
        const result = await offer.save()

        res.json({ status: "ok" })

    }


    if (req.method == 'GET') {

        const offers = await offerModel.find().sort({ _id: -1 })

        res.json(offers)

    }

}