import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  // goal is to connect to the db
  await dbConnect();

  // check if the request method is GET

  if (request.method === "GET") {
    // make a request to the db to get the jokes
    const products = await Product.find();

    console.log("products: ", products);

    // send the jokes back
    response.status(200).json(products);
  }
}
