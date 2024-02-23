import { Router } from "express";
import { check } from "express-validator";
import { clientPost } from "./client.controller.js";

const router = Router();

router.post(
    "/",
    [
        check("name", "Client name cannot be empty").not().isEmpty(),
        check("mail", "This is not a valid email").isEmail(),
        check("password", "Password must be greater than 6 characters").isLength({min:6}),
    ], clientPost)

export default router;