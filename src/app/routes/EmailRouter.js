const EmailStyleRouter = require("express").Router();
const EmailStyleController = require("../controllers/EmailStyleController");

const SendEmailController = require("../controllers/SendEmailController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const axios = require("axios");
const qs = require("qs");

//CRUD -> CREATE, READ, UPDATE AND DELETE
EmailStyleRouter.post("/emailstyle", EmailStyleController.create);
EmailStyleRouter.get("/emailstyle", EmailStyleController.read);

EmailStyleRouter.post("/sendemailstyle", SendEmailController.send);



module.exports = EmailStyleRouter;
