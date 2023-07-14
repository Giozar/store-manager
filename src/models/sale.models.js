import mongoose from "mongoose";

const saleItemSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    productName: { type: String },
    quantity: { type: Number },
    price: { type: Number }
}, { '_id': false });

const saleSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    userName: {
        type: String,
    },

    items: [saleItemSchema],

    totalPrice: { type: Number },

    saleDate: {
        type: Date,
        default: Date.now(),
    }

}, {
    timestamps: true,
});

export default mongoose.model("Sale", saleSchema);