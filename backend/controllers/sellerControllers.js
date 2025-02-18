const Seller = require("../models/SellerModel");
const User = require("../models/UserModel");

exports.createSellerProfile = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const {
      firstName,
      lastName,
      displayName,
      img,
      description,
      languages,
      age,
      workExperience,
      educationHistory,
      email,
      phoneNumber,
    } = req.body;
    if (
      !firstName ||
      !lastName ||
      !displayName ||
      !img ||
      !description ||
      !languages ||
      !phoneNumber ||
      !email ||
      !age
    ) {
      return res.json({ success: false, msg: "Please fill in all the field" });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.json({
        success: false,
        msg: "Error occured, please sign-in again.",
      });
    }
    const checkSeller = await Seller.findOne({ userId: userId });
    if (checkSeller) {
      return res.json({
        success: false,
        msg: "Already have seller account.",
      });
    }
    const newSeller = new Seller({
      userId,
      firstName,
      lastName,
      displayName,
      img,
      description,
      languages,
      age,
      email,
      phoneNumber,
    });
    if (educationHistory) {
      newSeller.educationHistory = educationHistory;
    }
    if (workExperience) {
      newSeller.workExperience = workExperience;
    }
    await newSeller.save();
    user.sellerSetUp = true;
    await user.save();

    return res.json({
      success: true,
      newSeller,
      newUser: user,
      msg: "Seller profile created successfully",
    });
  } catch (error) {
    next(error);
  }
};
