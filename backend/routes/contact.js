const express = require("express");
const {
    addContactController,
    editContactController,
    getAllContactController,
    deleteContactController,
    getOneContactController
} = require("../controllers/contactController");
const router = express.Router();

//Add, View, Edit, Delete

router.post("/",addContactController);
router.put("/:contactId",editContactController);
router.get("/all",getAllContactController);
router.get("/:contactId",getOneContactController);
router.delete("/:contactId",deleteContactController);


module.exports = router;