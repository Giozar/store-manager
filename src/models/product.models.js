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
    quantity: {
        type: Number,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    providerId: { // 12 caracteres para que lo cuente como Id
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Provider' 
    },
}, {
    timestamps: true,
})

export default mongoose.model('Product', productSchema);