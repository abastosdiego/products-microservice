import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    description: {type: String},
    price: {type: Number}
}, {versionKey: false});

const productMongoModel = mongoose.model("products", productSchema);

export default productMongoModel;