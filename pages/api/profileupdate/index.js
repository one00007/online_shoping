import connection from "@/utils/database/connection";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import profileModel from "@/utils/schema/profilemode";

export default async function handler(req, res) {


    await connection()

    const session = await getServerSession(req, res, authOptions)

    try {
        const profiledetails = await profileModel.findOne({ email: session?.user?.email })


        if (profiledetails) {

            if (req.method == 'GET') {

                const profiledetails = await profileModel.findOne({ email: session?.user?.email })
                res.json({ profiledetails })

            }

            if (req.method == 'PATCH') {


                await profileModel.findOneAndUpdate({ email: session?.user?.email }, req.body)
                res.json({ status: "ok" })

            }

        } else {
            if (req.method == "PATCH") {
                const newprofile = new profileModel(req.body)
                await newprofile.save()
                res.json({ status: "ok" })
            }
        }

    } catch (error) {

    }







}