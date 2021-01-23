const express = require("express");
const router = express.Router();

router.use("/campuses", require("./campus_controller"));
router.use("/students", require("./student_controller"));

module.exports = router;