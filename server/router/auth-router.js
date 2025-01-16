const express = require("express");
const router = express.Router();
const {home,register} = require("../controllers/auth-controller");

/* router.get("/", (req, res)=>{
    res.status(200).send('Welcome to mern using router ');
}); */

router.route("/").get(home);

router.route("/register").get(register)

module.exports = router;