import mongoose from "mongoose";

const saleSchema = mongoose.Schema({
    saleDate: {
        type: Date,
        default: Date.now,
        require: true,
    },

    user: {
        require: true,
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },

    product: {
        require: true,
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product' 
    }

})