import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import { createAccesToken } from "../libs/jwt.js"

export const createUser = async (req, res) => {
    const { userName, email, password } = req.body;

    try {

        const userFound = await User.findOne({email});
        if(userFound) return res.status(400).json(["The email already exists"]);

        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({
            userName,
            email,
            password: passwordHash,
        });

        const userSaved = await newUser.save();
        const token = await createAccesToken({ id: userSaved._id })
        res.cookie("token", token);
        res.json({
            id: userSaved._id,
            email: userSaved.email,
            password: userSaved.password,
            createdAt: userSaved.createdAt,
            updateAt: userSaved.updateAt,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userFound = await User.findOne({ email });

        if (!userFound) return res.status(400).json({ message: "user not found" });

        const isMatch = await bcrypt.compare(password, userFound.password);

        if (!isMatch) return res.status(400).json({ message: " Incorrect password" })

        const token = await createAccesToken({ id: userFound._id })
        res.cookie("token", token);

        res.json({
            userName: userFound.userName,
            email: userFound.email,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const logout = (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0),
    })
    return res.sendStatus(200);
}

export const buy = async (req, res) => {
    try {
        const userFound = await User.findById(req.user.id);

        if (!userFound) return res.status(400).json({
            message: "User not found",
        })

        res.json({
            userName: userFound.userName,
            email: userFound.email,
            "COMPRAS":" TUS COMPRAS"
        })

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

