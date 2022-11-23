const { Router } = require("express");
const { readContacto, createContacto, deleteContacto, updateContacto } = require("../controllers/contactos");

const router = Router();

router.get("/", readContacto);

router.post("/crear", createContacto);

router.post("/update", updateContacto);

router.get('/delete/:id', deleteContacto);


module.exports  = router;