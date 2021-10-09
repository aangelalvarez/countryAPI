import express from "express";
let router = express.Router();

// Handle all the invalid routes
router.all("*", (req, res, next) => {
    res.status(404).send({errMsg: "Invalid route or method"});
});

export default router;