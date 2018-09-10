const express = require("express");
const router = express.Router();

// @route Get api/post/test
// @desc tests post route
// @access public

router.get("/test", (req, res) => res.json({ msg: "posts works" }));

module.exports = router;
