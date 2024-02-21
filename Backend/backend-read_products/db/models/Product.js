import mongoose from "mongoose";

const { Schema } = mongoose;

const jokeSchema = new Schema({
  joke: { type: String, required: true },
});

const Product = mongoose.models.Product || mongoose.model("Product", jokeSchema);

export default Product;
