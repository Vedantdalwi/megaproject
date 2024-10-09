import express from "express";
import { register, login ,logout,getMyProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/:id").get(isAuthenticated, getMyProfile);

export default router;