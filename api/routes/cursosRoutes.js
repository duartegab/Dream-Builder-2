const controllersCursos = require("../../api/controllers/cursosControllers")

const express = require('express');

const router = express.Router();

router.get("/adsm", controllersCursos.getAllAdsM);
router.get("/adsm/:id", controllersCursos.getByIdAdsM);

router.get("/adsn", controllersCursos.getAllAdsN);
router.get("/adsn/:id", controllersCursos.getByIdAdsN);

router.get("/dsm", controllersCursos.getAllDsm);
router.get("/dsm/:id", controllersCursos.getByIdDsm);

router.get("/ge", controllersCursos.getAllGe);
router.get("/ge/:id", controllersCursos.getByIdGe);

router.get("/gpim", controllersCursos.getAllGpiM);
router.get("/gpim/:id", controllersCursos.getByIdGpiM);

router.get("/gpin", controllersCursos.getAllGpiN);
router.get("/gpin/:id", controllersCursos.getByIdGpiN);

// router.get("/", controllersCursos.getAll);
// router.get("/:id", controllersCursos.getById);

// router.get("/", controllersCursos.getAll);
// router.get("/:id", controllersCursos.getById);

module.exports = router;