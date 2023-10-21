import connection from "@/utils/database/connection";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";
import userModel from "@/utils/schema/userMode";
import profileModel from "@/utils/schema/profilemode";

export default async function handler(req, res) {

    const session = await getServerSession(req, res, authOptions)
    await connection()

    if (!session) {
        res.status(401).json({ status: false, message: "You must be logged in." });

        return;
    } else {


        const profile = await profileModel.findOne({ email: session?.user?.email })

        res.json({ profile })



    }



}