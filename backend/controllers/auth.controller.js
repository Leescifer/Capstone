import { User } from '../models/user.model.js'
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {

    const { email, password, name } = req.body;

    try {
        if (!email || !password || !name) {
            throw new Error("All fields are required")
        }

        const userAlreadyExists = await User.findOne({ email });

        if (userAlreadyExists) {
            return res.status(400).json({ success: false, message: "User Already Exist" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

        const user = new User({
            email,
            password: hashPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000 //24hours
        })

        await user.save();  

        res.status(201).json({
            success:true,
            message: "User Created Successfully",
            user: {
                ...user._doc,
                passowrd: undefined,
            }
        })

        generateTokenAndSetCookies(res, user._id)


    } catch (error) {

        res.status(400).json({ success: false, message: error.message });

    }

};

export const signin = async (req, res) => {
    res, send("SignIn Route");
};

export const logout = async (req, res) => {
    res, send("Logout Route");
};