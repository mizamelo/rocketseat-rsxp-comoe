const express = require("express")
const DevController = require("./controllers/DevController")
const LikeController = require("./controllers/LikeController")
const DislikeController = require("./controllers/DislikeController")
const NotificationController = require("./controllers/NotificationController")

const routes = express.Router()

routes.post("/devs", DevController.store)
routes.get("/devs", DevController.index)

routes.post("/devs/:devId/likes", LikeController.store)
routes.post("/devs/:devId/dislikes", DislikeController.store)

routes.post("/notifications", NotificationController.store)
routes.get("/notifications", NotificationController.index)
routes.put("/notifications/:id", NotificationController.update)

module.exports = routes
