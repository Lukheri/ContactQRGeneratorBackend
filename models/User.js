import mongoose from 'mongoose';

// Destructure Schema from mongoose
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthdate: { type: String, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    contactNumber: { type: String, required: true },
    password: { type: String, required: true }
  }, { timestamps: true })

const User = mongoose.model("User", userSchema)

export default User