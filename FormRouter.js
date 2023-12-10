const { Router } = require("express");
const router = Router();
const  { getForm, postForm } = require("./FormController");

router.get("/", getForm);
router.post("/", postForm);

module.exports = router;