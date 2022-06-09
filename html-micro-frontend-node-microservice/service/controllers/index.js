const router = require("express").Router()
const customController = require("./customController/customController")

router.use("/custom", customController)

module.exports = router