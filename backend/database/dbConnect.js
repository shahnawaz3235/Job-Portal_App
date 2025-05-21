import mongoose from "mongoose";

const dbConnection = () => {
    mongoose.connect(mongodb+srv://shah:shah@cluster0.dcr4b.mongodb.net/jobportal?retryWrites=true&w=majority, {
        dbName: "jobportal"
    }).then(() => {
        console.log("Database Connected")

    }).catch((err) => {
        console.log(`Failed to Connect with database ${err}`)
    })
}

export default dbConnection
