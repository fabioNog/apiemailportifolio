const EmailStyleRouter = require("express").Router();
const EmailStyleController = require("../controllers/EmailStyleController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const axios = require("axios");
const qs = require("qs");

//CRUD -> CREATE, READ, UPDATE AND DELETE
EmailStyleRouter.post("/emailstyle", EmailStyleController.create);
EmailStyleRouter.get("/emailstyle", EmailStyleController.read);



// EmailStyleRouter.patch('/emailstyle/:id', EmailStyleController.update);

// EmailStyleRouter.delete('/emailstyle/:id', EmailStyleController.delete);

module.exports = EmailStyleRouter;
