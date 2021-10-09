import express from "express";
let router = express.Router();
import {Country} from "../database.js";
import {tryCatchAsync} from "../middleware.js"


/*
GET METHOD REGARDING A COUNTRY
The /languages/:country route allows us to get a specific country
if you want to find Mexico, you would use http://localhost:3000/country/Mexico
Handle get requests to the /country/:country route
*/
router.get("/:country", (tryCatchAsync(async(req, res, next) => {
    //Find country by name
    const getResult = await Country.findOne({name: req.params.country});

    if (!getResult) {
        return res.send({errMsg: "No countries match that language"});
    } else {
        return res.send(getResult);
    }

})));


export default router;