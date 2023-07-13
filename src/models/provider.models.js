import mongoose from "mongoose";

const providerSchema = new mongoose.Schema({
    providerName: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    address: {
        type: String,
        require: true,
    },
    phone: {
        type: Number,
        require: true,
    },
}, {
    timestamps: true,
})

export default mongoose.model("Provider", providerSchema);