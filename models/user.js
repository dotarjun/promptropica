import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unqiue: [true, "Email already exists"],
    required: [true, "Please provide an email"],
  },
  name: {
    type: String,
    required: [true, "Please provide a username"],
  },
  username: {
    type: String,
    required: [true, "Please provide a username"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
    required: [true, "Image required"],
  },
});

const User = models.User || model("User", UserSchema);

export default User;
