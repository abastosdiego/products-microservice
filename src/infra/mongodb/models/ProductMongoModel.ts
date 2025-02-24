import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    description: {type: String, required: true},
    price: {type: Number, required: true}
}, {versionKey: false});

const productMongoModel = mongoose.model("products", productSchema);

export default productMongoModel;