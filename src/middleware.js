import { Request } from "./database.js"

// Handle errors manually catched
const handleError = (e, req, res, next) => {
    if (Object.keys(e).length > 0 && e.constructor === Object) { 
        // Check if error is not an empty object, we don't want to send an empty error
        res.send({errMsg: e});
        res.end();
    } else {
        res.send({errMsg: "Cannot connect to the database"});
        res.end();
    }
};

// Catch async errors
const tryCatchAsync = (func) => {
    return function(req, res, next) {
        func(req, res, next).catch((e) => next(e));
    }
};

// Register the info of every request
const requestInfo = tryCatchAsync(async(req, res, next) => {
    const dateTime = new Date();
    const currDateTime = 
        (dateTime.getMonth() + 1) + "/" +
        dateTime.getDate() + "/" +
        dateTime.getFullYear() + " at " +
        dateTime.getHours() + ":" +
        dateTime.getMinutes() + ":" +
        dateTime.getSeconds();
    
    const currentRequestInfo = new Request({
        method: req.method,
        route: req.path,
        date: currDateTime
    });

    await currentRequestInfo.save();

    next();
});

export {requestInfo, tryCatchAsync, handleError};