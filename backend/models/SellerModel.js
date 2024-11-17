const mongoose = require("mongoose");

const sellerSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
    img: {
      type: String,
      required: true,
      default:
        "https://vivureviews.com/wp-content/uploads/2022/08/avatar-vo-danh-3-794x1024.webp",
    },
    sellerLevel: {
      type: String,
      required: true,
      enum: ["New Seller", "Verified Seller", "Elite Seller"],
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    currentProfession: {
      type: String,
    },
    age: {
      type: Number,
    },
    workExperience: {
      type: String,
    },
    EducationHistory: {
      type: String,
    },
    language: [
      {
        type: String,
        default: "English",
      },
    ],
    city: {
      type: String,
      default: null,
    },
    birthDay: {
      type: Date,
      default: null,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Seller = new mongoose.model("Seller", sellerSchema);
module.exports = Seller;
