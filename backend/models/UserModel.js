const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
      default:
        "https://vivureviews.com/wp-content/uploads/2022/08/avatar-vo-danh-3-794x1024.webp",
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
    },
    language: [
      {
        type: String,
        default: "English",
      },
    ],

    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    location: {
      type: String,
    },
    fromGoogle: {
      googleAuth: { type: Boolean, default: false },
      uid: {
        type: String,
        default: "",
      },
    },
    birthDay: {
      type: Date,
      default: "",
    },
  },
  { timestamps: true }
);

const User = new mongoose.model("User", userSchema);
module.exports = User;
