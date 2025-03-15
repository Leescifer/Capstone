import mongoose from "mongoose";

// Personal Data Schema (Embedded)
const personalDataSchema = new mongoose.Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    middleName: { type: String, required: true, trim: true },
    birthDate: {
        type: Date,
        required: true,
        validate: {
            validator: function (value) {
                const today = new Date();
                const minAge = 16;
                const maxAge = 30;
                const minDate = new Date(today.getFullYear() - maxAge, today.getMonth(), today.getDate());
                const maxDate = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
                return value >= minDate && value <= maxDate;
            },
            message: "Age must be between 16 and 30 years old."
        }
    },
    gender: { type: String, enum: ['Male', 'Female'], required: true },
    age: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) {
                return value >= 16 && value <= 30;
            },
            message: "Age must be between 16 and 30."
        }
    },
    birthPlace: { type: String, required: true, trim: true },
    occupation: { type: String, enum: ['Student', 'Working', 'Not Working'], required: true },
    civilStatus: { type: String, required: true, trim: true },
    phoneNumber: {
        type: String,
        unique: true, // This automatically creates an index
        required: true,
        validate: {
            validator: function (v) {
                return /^(\+63|0)9\d{9}$/.test(v);
            },
            message: props => `${props.value} is not a valid Philippine phone number!`
        },
        set: v => v.replace(/^0/, "+63") // Auto-convert 09XXXXXXXXX to +639XXXXXXXXX
    }
});

// User Schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true }, // This automatically creates an index
    password: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    personalData: personalDataSchema, // Embed personal data inside User schema
    lastLogin: { type: Date, default: Date.now },
    isVerified: { type: Boolean, default: false },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date
}, { timestamps: true });


export const User = mongoose.model("User", userSchema);
