const express = require("express");
const { formHandler } = require("../controller/formController");

const router = express.Router();

router.post('/formSubmit',formHandler);

module.exports = router;