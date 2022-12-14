const express = require('express');
const router = express.Router();
const userController = require("../controllers/users.controllers");
const verifyToken = require('../middlewares/validate-tokens');

router.get('/', userController.findAll)

router.post("/create", userController.create)

router.post("/login", userController.login)

router.post("/getinfo", verifyToken, userController.findByPk)

router.post("/validate-token", verifyToken, userController.validateToken)

router.post("/get-money", verifyToken, userController.getMoneyByPk)

router.post("/add-money", verifyToken, userController.addMoneyByPk)

router.post('/pokedex', verifyToken, userController.pokedex)


module.exports = router;
