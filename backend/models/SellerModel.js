const mongoose = require("mongoose");

const sellerSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
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
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: string,
      required: true,
    },
    displayName: {
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
    workExperience: [
      {
        occupation: {
          type: String,
          required: true,
        },
        yearOfWorking: {
          type: Number,
          required: true,
        },
        locationOfJob: {
          type: String,
          required: true,
        },
      },
    ],
    EducationHistory: {
      type: String,
    },
    languages: [
      {
        language: {
          type: String,
          default: "English",
          required: true,
        },
        level: {
          type: String,
          enum: ["Basic", "Conversational", "Fluent", "Native/Bilingual	"],
          required: true,
        },
      },
    ],
    city: {
      type: String,
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
