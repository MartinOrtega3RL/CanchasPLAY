const express = require("express");
const router = express.Router();

const { getComplejo, getComentarios } = require("../Data/GetDataComplejo");
const postDataUser = require("../Data/PostDataUserAuht0");

// Home page route.
router.get("/getComplejo", getComplejo);


router.post("/getComentarios",getComentarios);


router.post("/getUserDatosAuth0",postDataUser)



module.exports =  router