import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { name, email, password, age, gender, address, city, country } =
      req.body;
    if (
      !name ||
      !email ||
      !password ||
      !age ||
      !gender ||
      !address ||
      !city ||
      !country
    ) {
      return res.status(401).json({
        message: "All Fields are required",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "User with same email already exists",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: hashedPassword,
      age,
      gender,
      address,
      city,
      country,
    });
    return res.status(201).json({
      message: "Account created successfully. ",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        messgae: "Something is missing, please check!",
        success: false,
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Incorrect email or passowrd",
        success: false,
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({
        message: " Incorrect email or password",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    user = {
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      age: user.age,
      gender: user.gender,
      address: user.address,
      city: user.city,
      country: user.country,
      policies: user.policies,
    };
    return res
      .status(210)
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        expiresIn: "1d",
      })
      .json({
        message: `Welcome back ${user.name}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async(req,res) => {
  try {
    return res.cookie("token", "", {maxAge: 0}).json({
      message: "Logged Out successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMyProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).select("-password");
    return res.status(200).json({user, success: true});
  } catch (error) {
    console.log(error);
  }
}

export const editProfile = async (req, res) => {
  try {
    const userId = req.id; // Assuming userId comes from authentication middleware (e.g., JWT)
    const { name, email, age, gender, address, city, country } = req.body;

    // Find the user by ID, excluding password in the result
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({
        message: "User not found.",
        success: false,
      });
    }

    // Check if the new email is already in use by another user, but only if email is provided
    if (email && email !== user.email) {
      const emailExists = await User.findOne({ email });
      if (emailExists) {
        return res.status(400).json({
          message: "Email already in use by another user.",
          success: false,
        });
      }
    }

    // Update user fields if provided, only modify if a value is passed
    if (name && name.trim()) user.name = name.trim(); // Trim to avoid saving whitespace
    if (email && email.trim()) user.email = email.trim();
    if (age !== undefined) user.age = age; // Allow for age to be updated to 0 if needed
    if (gender && gender.trim()) user.gender = gender.trim();
    if (address && address.trim()) user.address = address.trim();
    if (city && city.trim()) user.city = city.trim();
    if (country && country.trim()) user.country = country.trim();

    // Save the updated user information
    await user.save();

    return res.status(200).json({
      message: "Profile updated successfully.",
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while updating the profile.",
      success: false,
    });
  }
};


