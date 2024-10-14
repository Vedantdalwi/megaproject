import express from "express";
import { register, login ,logout,getMyProfile,editProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/:id/profile").get(isAuthenticated, getMyProfile);
router.route("/profile/edit").put(isAuthenticated, editProfile);



export default router;