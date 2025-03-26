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
      default: "New Seller",
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
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

    workExperience: [
      {
        occupation: {
          type: String,
        },
        yearStart: {
          type: Number,
        },
        yearEnd: {
          type: Number,
        },
      },
    ],
    age: {
      type: Number,
      required: true,
    },
    educationHistory: [
      {
        nameOfTheSchool: {
          type: String,
        },
        typeOfStudy: {
          type: String,

          enum: [
            "Associate",
            "B.A.",
            "B.Sc.",
            "M.A.",
            "M.B.A.",
            "M.Sc.",
            "J.D.",
            "M.D.",
            "Ph.D",
            "BArch",
            "BM",
            "BFA",
            "MFA",
            "Certificate",
            "LLB",
            "LLM",
            "Other",
          ],
        },
        yearOfCompletion: {
          type: String,
        },
        major: {
          type: String,
        },
        countryOfSchool: {
          type: String,
        },
      },
    ],

    languages: [
      {
        language: {
          type: String,
          default: "English",
          required: true,
        },
        level: {
          type: String,
          enum: ["Basic", "Conversational", "Fluent", "Native/Bilingual"],
          required: true,
        },
      },
    ],
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Seller = new mongoose.model("Seller", sellerSchema);
module.exports = Seller;
