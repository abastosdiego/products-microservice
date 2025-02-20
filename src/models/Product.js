import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    descricao: {type: String}
}, {versionKey: false});

const product = mongoose.model("products", productSchema);

export default product;