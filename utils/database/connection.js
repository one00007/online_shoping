import mongoose from "mongoose"

let isConnected

export default async function connection() {

    if (isConnected) {

        console.log("database is already connected")

    } else {

        await mongoose.connect("mongodb+srv://onefinancetrading:2W0gn0Zi3oqhkBLj@cluster0.v4xytdg.mongodb.net/?retryWrites=true&w=majority").then(() => {
            console.log('database is connected Successfull')
            isConnected = true
        }).catch((error) => {
            console.log("not connected")
            console.log(error)
        })

    }
}