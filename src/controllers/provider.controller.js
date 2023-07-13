import Provider from "../models/provider.models.js";

export const createProvider = async (req, res) => {
    const {providerName, address, phone} = req.body;
    try {
        const providerFound = await Provider.findOne({providerName});
        if(providerFound) return res.status(400).json({
            message: "the provider is already exists",
        });

        const newProvider = new Provider({
            providerName,
            address,
            phone,
        });

        const providerSaved = await newProvider.save();
        res.json(providerSaved);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }
}

export const deleteProvider = async( req, res) => {
    
    try {
        const providerFound = await Provider.findByIdAndDelete(req.params.id);
        if(!providerFound) return res.status(400).json({message: "Provider not found"})
        res.json(providerFound);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }
    
}