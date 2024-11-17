const mongoose = require("mongoose");

const GigSchema = mongoose.Schema(
  {
    sellerId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Seller",
    },
    title: {
      type: String,
      required: true,
    },
    category: {},
    subCategory: {
      type: String,
      required: true,
      enum: [
        "Plumbing Repairs",
        "Electrical Repairs",
        "House Cleaning",
        "Appliance Repairs",
        "Pest Control",
        "Carpet Cleaning",
        "Painting Services",
        "Lawn Care and Gardening",
        "HVAC Repairs",
        "Vehicles repairs",
        "Hairdressing and Haircuts",
        "Pet Sitting and Pet Walking",
        "Elderly Care Services",
        "Beauty Treatments",
        "Tutoring",
        "Music Lessons",
        "Computer Repairs",
        "Home Security Installation",
        "IT Support",
        "Phone Repairs",
        "DJ Services",
        "Photography and Videography",
        "Catering",
        "Handyman Services",
        "Moving Assistance",
      ],
    },
    expectedWagePerHour: {
      type: Number,
      required: true,
    },
    Gallery: [{ type: String, required: true }],
    status: {
      type: String,
      enum: ["active", "drafted", "paused"],
    },
  },
  { timestamps: true }
);

const Gig = new mongoose.model("Gig", GigSchema);
module.exports = Gig;
