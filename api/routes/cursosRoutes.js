const controllersCursos = require("../../api/controllers/cursosControllers")

const express = require('express');

const router = express.Router();

router.get("/adsm", controllersCursos.getAllAdsM);
router.get("/adsm/:id", controllersCursos.getByIdAdsM);

router.get("/adsn", controllersCursos.getAllAdsN);
router.get("/adsn/:id", controllersCursos.getByIdAdsN);

// router.get("/", controllersCursos.getAll);
// router.get("/:id", controllersCursos.getById);

// router.get("/", controllersCursos.getAll);
// router.get("/:id", controllersCursos.getById);

// router.get("/", controllersCursos.getAll);
// router.get("/:id", controllersCursos.getById);

// router.get("/", controllersCursos.getAll);
// router.get("/:id", controllersCursos.getById);

// router.get("/", controllersCursos.getAll);
// router.get("/:id", controllersCursos.getById);

// router.get("/", controllersCursos.getAll);
// router.get("/:id", controllersCursos.getById);

module.exports = router;