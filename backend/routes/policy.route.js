import express from "express";
import { addNewPolicy, getUserPolicy, deletePolicy } from "../controllers/policy.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/addpolicy").post(isAuthenticated ,addNewPolicy);
router.route("/policies").get(isAuthenticated, getUserPolicy);
router.route("/deletePolicy/:id").delete(isAuthenticated, deletePolicy);


export default router;