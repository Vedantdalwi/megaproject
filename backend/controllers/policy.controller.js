import { Policy } from "../models/policy.model.js"; // Policy model
import { User } from "../models/user.model.js"; // User model

export const addNewPolicy = async (req, res) => {
  try {
    const {
      policyNumber,
      policyName,
      policyType,
      provider,
      startDate,
      endDate,
      installmentDuration,
      installmentAmount,
      nominees,
    } = req.body;

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

    const validPolicyTypes = ["health", "life", "auto", "home"];
    if (!validPolicyTypes.includes(policyType)) {
      return res.status(400).json({
        message:
          "Invalid policy type. Accepted values are: health, life, auto, home",
        success: false,
      });
    }

    const validInstallmentDurations = ["monthly", "3 months", "annually"];
    if (!validInstallmentDurations.includes(installmentDuration)) {
      return res.status(400).json({
        message:
          "Invalid installment duration. Accepted values are: monthly, 3 months, annually",
        success: false,
      });
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    if (start >= end) {
      return res.status(400).json({
        message: "Start date must be earlier than end date",
        success: false,
      });
    }

    const existingPolicy = await Policy.findOne({ policyNumber });
    if (existingPolicy) {
      return res.status(400).json({
        message: "Policy number already exists",
        success: false,
      });
    }

    if (nominees && !Array.isArray(nominees)) {
      return res.status(400).json({
        message: "Nominees must be an array of names",
        success: false,
      });
    }

    const policy = await Policy.create({
      policyNumber,
      policyName,
      policyType,
      provider,
      startDate,
      endDate,
      installmentDuration,
      installmentAmount,
      user: null, // Set to null since no user is linked
      nominees: nominees || [],
    });

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
      error: error.message,
    });
  }
};


export const getUserPolicy = async (req, res) => {
  try {
    const policies = await Policy.find({})
      .sort({ createdAt: -1 });

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
    const policyId = req.params.id;

    const policy = await Policy.findById(policyId);
    if (!policy) {
      return res
        .status(404)
        .json({ message: "Policy not found", success: false });
    }

    await Policy.findByIdAndDelete(policyId);

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
