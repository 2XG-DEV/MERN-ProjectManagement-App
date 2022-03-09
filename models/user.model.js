import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  name: { type: String, required: true },
  username: { type: String, unique: true },
  image: {
    type: String,
    required: true,
    default: "./assets/user-images/image-anonymous.png",
  },
});

const User = mongoose.model("user", userSchema);

export default User;
