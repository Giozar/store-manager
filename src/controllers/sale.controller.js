import Product from "../models/product.models.js";
import Sale from "../models/sale.models.js";
import User from "../models/user.models.js";

export const createSale = async (req, res) => {

    const { userId, items } = req.body;
    try {
        const userFound = await User.findById(userId);
        console.log(userFound);
        if (!userFound) return res.status(400).json({ message: "User not exists" });

        let totalPrice = 0;
        let itemsSaved = [];

        for (const item of items) {
            const productId = item.productId;
            const productFound = await Product.findById(productId);
            if (!productFound) return res.status(400).json({ message: `Product with id: ${productId} not exists` })

            item.productName = productFound.productName;
            item.price = productFound.price;
            totalPrice += item.price * item.quantity;
            itemsSaved.push(item);
        }

        const newSale = new Sale({
            userId: userFound._id,
            userName: userFound.userName,
            items: itemsSaved,
            totalPrice,
        })

        const saleSaved = await newSale.save();

        res.json(saleSaved);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'something went wrong' });
    }
}

export const deleteSale = async(req, res) => {
    
    try {
        const sale = await Sale.findOneAndDelete(req.params.id);
        if(!sale) return  res.status(500).json({ message: "sale not found"});
        res.json(sale);
    } catch (error) {
        console.log(error);
        return  res.status(500).json({ message: "sale not found"});
    }
}