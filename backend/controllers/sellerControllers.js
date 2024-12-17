import Seller from "../models/SellerModel";
import User from "../models/UserModel";

exports.createSellerProfile = async (req, res, next) => {
  try {
    const {
      userId,
      firstName,
      lastName,
      displayName,
      img,
      description,
      languages,
      age,
      workExperience,
    } = req.body;
    if (
      !userId ||
      !firstName ||
      !lastName ||
      !displayName ||
      !img ||
      !description ||
      !languages ||
      !age ||
      !workExperience
    ) {
      return res.json({ success: false, msg: "Please fill in all the field" });
    }
    const checkUserID = await User.findById(userId);
    if (!checkUserID) {
      return res.json({
        success: false,
        msg: "Error occured, please sign-in again.",
      });
    }
    const newSeller = new Seller({
      userId: userId,
      firstName: firstName,
      lastName: lastName,
      displayName: displayName,
      img: img,
      description: description,
      languages: languages,
      age: age,
      workExperience: workExperience,
    });
    await newSeller.save();
    return res.json({
      success: true,
      newSeller,
      msg: "Seller profile created successfully",
    });
  } catch (error) {
    next(error);
  }
};
