const router = require("express").Router()
const CustomService = require('../../services/customService.js')
const {HttpError} = require("../../utils/utils")

router.post("/result", async (req, res, next) => {
    try {
        if(req.body.numbers) {
            service = new CustomService()
            result = await service.getResult(JSON.parse(req.body.numbers))
            res.status(200).json(result);
        } else {
            res.status(400).json("A list of 'numbers' must be provided in the body")
        }

    } catch (e) {
        next(e)
    }
})


module.exports = router