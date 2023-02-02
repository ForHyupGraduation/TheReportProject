const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    return res.status(200).send({
        message: "재광님의 작품"
    });
})


module.exports = router;