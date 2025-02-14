const express = require("express");
const router = express.Router();
const {home,register,login,} = require("../controllers/auth-controller");
const authControllers = require("../controllers/auth-controller");
const signupSchema = require("../validator/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");

/* router.get("/", (req, res)=>{
    res.status(200).send('Welcome to mern using router ');
}); */

router.route("/").get(home);
router.route("/register").post(validate(signupSchema), register);
router.route("/login").post(login);
router.route("/user").get(authMiddleware ,authControllers.user);

module.exports = router;