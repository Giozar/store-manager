import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        trim: true,
        require: true,
    },
    description: {
        type: String,
        trim: true,
        require: true,
    },
    category: {
        type: String,
        trim: true,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
    },
    provider: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Provider' 
    },
}, {
    timestamps: true,
})

export default mongoose.model('Product', productSchema);