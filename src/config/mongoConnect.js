import mongoose from "mongoose";

export default async function conecta() {
    mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    return mongoose.connection;
}