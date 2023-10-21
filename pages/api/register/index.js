import connection from "@/utils/database/connection";
import userModel from "@/utils/schema/userMode";
import BalanceModel from "@/utils/schema/tradeModel";

export default async function handler(req, res) {
    await connection()
    const method = req.method
    const body = req.body

    if (method == 'POST') {

        const { firstName, lastName, email, password } = body

        const isUserExist = await userModel.findOne({ email })

        if (isUserExist?.email == email) {

            return res.json({ status: { isError: true, massage: "user is already exist" } })

        } else {

            try {


                function generateUniqueId(length) {
                    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    let uniqueId = '';

                    for (let i = 0; i < length; i++) {
                        const randomIndex = Math.floor(Math.random() * characters.length);
                        uniqueId += characters.charAt(randomIndex);
                    }

                    return uniqueId;
                }

                const uniqueId = generateUniqueId(7);
                const uppercaseUniqueId = uniqueId.toUpperCase()


                //generate date dd-mm-yyyy formate
                const newDate = new Date()
                const date = `${newDate.getDate()}-${(newDate.getMonth().toString().length > 2) ? newDate.getMonth() : `0${newDate.getMonth()}`}-${newDate.getFullYear()}`
                //generate date dd-mm-yyyy formate

                const newuser = new userModel({ name: `${firstName} ${lastName}`, firstName, lastName, email, password, usertype: "client", status: false, on: date, usertype: "user", username: `OFT${uppercaseUniqueId}` })
                const result = await newuser.save()


               

                return res.json({ status: { isError: false, massage: "user register succesfull go to login" }, user: { username: result.username, password: result.password } })

            } catch (error) {
                console.log(error)
            }
        }

        // return NextResponse.rewrite(url)

    }
}