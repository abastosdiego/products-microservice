import mongoose from "mongoose";

export default async function conecta() {
    let connetionString = process.env.MONGO_CONNECTION_STRING;
    if (typeof connetionString !== 'string') {
        throw new Error('Conection string não encontrada');
    }
    mongoose.connect(process.env.MONGO_CONNECTION_STRING ?? '');
    return mongoose.connection;
}