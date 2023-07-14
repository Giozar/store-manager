import Product from "../models/product.models.js";
import Provider from "../models/provider.models.js"
export const createProduct = async (req, res) => {

    const { productName, description, category, price, quantity, providerId } = req.body;

    try {
        const productFound = await Provider.findOne({productName});
        if(productName) return res.status(400).json({
            message: `the product with name ${ productName } is already exists`,
        });
        
        const providerFound = await Provider.findById(providerId);
        if(!providerFound) return res.status(400).json({message: 'the provider not exists'});
        
        const newProduct = new Product({
            productName,
            description,
            category,
            price,
            quantity,
            providerId: providerFound._id,
        });
        const productSaved = await newProduct.save();
        res.json(productSaved);

    } catch (error) {
        res.status(500).json({ message: 'something went wrong' });
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