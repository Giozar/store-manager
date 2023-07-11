import mongoose from "mongoose";

const providerSchema = new mongoose.Schema({
    providerName: {
        type: String,
        require: true,
        trim: true
    },
    address: {
        type: String,
        require: true,
    },
})