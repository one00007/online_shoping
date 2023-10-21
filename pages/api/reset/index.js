import connection from "@/utils/database/connection"
import userModel from "@/utils/schema/userMode"
import sendemail from "@/utils/addOns/mailsend"

export default async function handler(req, res) {

    await connection()

    const { username, email } = req.body

    try {


        const user = await userModel.findOne({ email: email })

        if (user && user.email == email && user.username == username) {
            console.log("working")

            const { name, username, email, password } = user

            sendemail(name, email, password,username)
            res.json({ massage: "Password Sent on your email", isError: false })

        } else {

            res.json({ massage: "something went wrong" })

        }


    } catch (error) {

    }

}