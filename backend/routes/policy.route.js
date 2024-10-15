import express from "express";
import { addNewPolicy, getUserPolicy } from "../controllers/policy.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/addpolicy").post(isAuthenticated ,addNewPolicy);
router.route("/policies").get(isAuthenticated, getUserPolicy);

export default router;