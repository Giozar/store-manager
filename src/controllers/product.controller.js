import Product from "../models/product.models.js";

export const createProduct = async (req, res) => {

    const { productName, description, category, price, quantity } = req.body;

    try {
        const newProduct = new Product({
            productName,
            description,
            category,
            price,
            quantity,
        });

        const productSaved = await newProduct.save();
        res.json(productSaved);
    } catch (error) {
        console.log(error);
    }
}

export const getProducts = async (req, res) => {

    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.log(error);
    }
}

export const getProduct = async ( req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product) return  res.status(500).json({ message: "product not found"});
        res.json(product);
    } catch (error) {
        console.log(error);
        return  res.status(500).json({ message: "product not found"});
    }
}

export const deleteProduct = async ( req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product) return  res.status(500).json({ message: "product not found"});
        res.json(product);
    } catch (error) {
        console.log(error);
        return  res.status(500).json({ message: "product not found"});
    }
}
export const updateProduct = async ( req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if(!product) return  res.status(500).json({ message: "product not found"});
        res.json(product);
    } catch (error) {
        console.log(error);
        return  res.status(500).json({ message: "product not found"});
    }
}