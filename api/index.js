const express = require('express')

const router = express.Router()

// if mount path starts with '/campuses', then load the campus_controller module. 
router.use('/campuses', require('./campus_controller'));
// router.use('/students', require('./students'));

module.exports = router;