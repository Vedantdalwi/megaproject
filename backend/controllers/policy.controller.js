import { Policy } from "../models/policy.model.js"; // Policy model
import { User } from "../models/user.model.js"; // User model

export const addNewPolicy = async (req, res) => {
  try {
    // Destructure required fields from the request body
    const {
      policyNumber,
      policyName,
      policyType,
      provider,
      startDate,
      endDate,
      installmentDuration,
      installmentAmount,
    } = req.body;

    // Get user ID from the request, assuming it's attached from middleware (e.g., after authentication)
    const userId = req.id;

    // Basic validation to check if all required fields are provided
    if (
      !policyNumber ||
      !policyName ||
      !policyType ||
      !provider ||
      !startDate ||
      !endDate ||
      !installmentDuration ||
      !installmentAmount
    ) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    // Validate policyType (optional, can be skipped if enum does it for you)
    const validPolicyTypes = ["health", "life", "auto", "home"];
    if (!validPolicyTypes.includes(policyType)) {
      return res.status(400).json({
        message:
          "Invalid policy type. Accepted values are: health, life, auto, home",
        success: false,
      });
    }

    // Validate installmentDuration
    const validInstallmentDurations = ["monthly", "3 months", "annually"];
    if (!validInstallmentDurations.includes(installmentDuration)) {
      return res.status(400).json({
        message:
          "Invalid installment duration. Accepted values are: monthly, 3 months, annually",
        success: false,
      });
    }

    // Check if startDate is before endDate
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (start >= end) {
      return res.status(400).json({
        message: "Start date must be earlier than end date",
        success: false,
      });
    }

    // Check if the policy number is unique
    const existingPolicy = await Policy.findOne({ policyNumber });
    if (existingPolicy) {
      return res.status(400).json({
        message: "Policy number already exists",
        success: false,
      });
    }

    // Create the new policy
    const policy = await Policy.create({
      policyNumber,
      policyName,
      policyType,
      provider,
      startDate,
      endDate,
      installmentDuration,
      installmentAmount,
      user: userId,
    });

    // Find the user and attach the policy reference to their profile
    const user = await User.findById(userId);
    if (user) {
      user.policies.push(policy._id);
      await user.save();
    }

    // Populate the user field without returning sensitive info like password
    await policy.populate({ path: "user", select: "-password" });

    return res.status(201).json({
      message: "New policy added successfully",
      policy,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error",
      success: false,
      error: error.message, // Send more error information
    });
  }
};

export const getUserPolicy = async (req, res) => {
  try {
    const userId = req.id; 
    const policies = await Policy.find({ user: userId })
      .sort({ createdAt: -1 }) // Sort policies by creation date (most recent first)
      .populate({
        path: "user",
      });

    return res.status(200).json({
      policies,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error retrieving policies",
      success: false,
    });
  }
};

export const deletePolicy = async (req, res) => {
  try {
    const policyId = req.params.id; // Get policy ID from URL parameters
    const userId = req.id; // Get the authenticated user's ID (assuming it's set in req.id)

    // Find the policy by ID
    const policy = await Policy.findById(policyId);
    if (!policy) {
      return res
        .status(404)
        .json({ message: "Policy not found", success: false });
    }

    // Check if the logged-in user is the owner of the policy
    if (policy.user.toString() !== userId) {
      return res.status(403).json({ message: "Unauthorized", success: false });
    }

    // Delete the policy
    await Policy.findByIdAndDelete(policyId);

    // Remove the policy ID from the user's policies array
    let user = await User.findById(userId);
    user.policies = user.policies.filter((id) => id.toString() !== policyId);
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Policy deleted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};