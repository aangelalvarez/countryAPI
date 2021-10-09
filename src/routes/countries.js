import express from "express";
let router = express.Router();
import {Country} from "../database.js";
import {tryCatchAsync} from "../middleware.js"



/*
ROUTES REGARDING ALL ARTICLES
The /countries route is our main route for handling data, here we can get all the countries and their languages (get), 
add new entries (post), put to an existing article (put) (update name and languages), patch an existing 
article (patch) (update either name or language), and delete existing ones (delete).
*/
router.route("/")
// Handle get requests to the /countries route
// The get method allows us to get all the countries and its languages
// THE 'e' PARAMETER STANDS FOR ERROR
.get(tryCatchAsync(async(req, res, next) => {
    const countries = await Country.find();
    return countries.length > 0 ? res.send(countries) : res.send({errMsg: "No countries were found in the database"});
}))
// Handle post requests to the /countries route
// The post method inserts a new article, you must provide the 'name' and 'languages' keys
.post(tryCatchAsync(async(req, res, next) => {
    if(!req.body.name || !req.body.languages) {
        return res.send({errMsg: "Post failed, you must provide both 'name' of the country and its 'languages'"});
        // The return before the res.send() functions allows us to avoid getting errors because the app tries to 
        // use the send method more than once
    }
    const newCountryEntry = new Country({
        name: req.body.name,
        languages: req.body.languages
    }); // e stands for error

    await newCountryEntry.save();
    
    return res.send({successMsg: `A new entry with the following properties has been added {name: ${req.body.name}, languages: ${req.body.languages} }`});
    
}))
// Handle put requests to the /countries route
// The put method updates a whole article, you must provide the current 'name', the 'newName', and the 'newLanguages'
.put(tryCatchAsync(async(req, res, next) => {
    if(!req.body.name || !req.body.newName || !req.body.newLanguages) {
        return res.send({errMsg: "Put failed, you must provide the previous 'name', the 'newName', and the 'newLanguages'"});
    } else if (req.body.name === req.body.newName) {
        return res.send({errMsg: "Put failed, the 'name' cannot be the same as the 'newName'"});
    }
    const newCountryPut = { 
        name: req.body.newName,
        languages: req.body.newLanguages
    };
    
    const putResult = await Country.replaceOne({name: req.body.name}, newCountryPut); 

    if (putResult.matchedCount === 0) {
        return res.send({errMsg: "Put failed, no matches found, if you want to add a new article try using the post method"});
    } else if (putResult.acknowledged === false) {
        return res.send({errMsg: "Put failed"});
    } else {
        return res.send({successMsg: `Successfully put the article, it is now: {name: ${req.body.newName},languages: ${req.body.newLanguages}}`});
    }
}))
// Handle patch requests to the /countries route
// The patch method updates a value of one of the articles, you must provide the current 'name', and either
// the 'newName' or the 'newLanguage', but not both
.patch(tryCatchAsync(async(req, res, next) => {
    if (!req.body.name) {
        return res.send({errMsg: "Patch failed, you must provide the 'name' of the country to be patched"});
    } else if (req.body.newName && req.body.newLanguages) {
        return res.send({errMsg: "Patch failed, you must provide one of the keys to be patched, either 'newName' or 'newLanguage', but not both"});
    } else if (req.body.name && (!req.body.newName && !req.body.newLanguages)) {
        return res.send({errMsg: "Patch failed, you must provide the original 'name', and either the 'newName' or the 'newLanguages'"})
    } else {
        if (req.body.newName || req.body.newLanguages) {

            if (req.body.newName) {

                const patchResult = await Country.updateOne({name: req.body.name}, {name: req.body.newName});
                
                if (patchResult.matchedCount === 0) {
                    return res.send({errMsg: "Patch failed, no matches found"});
                } else if (patchResult.acknowledged === false) {
                    return res.send({errMsg: "Patch failed"});
                } else {
                    return res.send({successMsg: `Successfully patched the article, the name is now: {name: ${req.body.newName}}`});
                }
            }

            
    
            if (req.body.newLanguages) {

                const patchResult = await Country.updateOne({name: req.body.name}, {languages: req.body.newLanguages});

                if (patchResult.matchedCount === 0) {
                    return res.send({errMsg: "Patch failed, no matches found"});
                } else if (patchResult.acknowledged === false) {
                    return res.send({errMsg: "Patch failed"});
                } else {
                    return res.send({successMsg: `Successfully patched the article, the languages are now: {languages: ${req.body.newLanguages}}`});
                }
            }

        }
    }    
}))
// Handle delete requests to the /countries route
// The delete method allows us to delete an article, you must provide the current 'name' of the article
.delete(tryCatchAsync(async(req, res, next) => {
    if (!req.body.name) {
        return res.send({errMsg: "Delete error, you must provide the 'name' of the object to be deleted"});
    }

    const deleteResult = await Country.deleteOne({name: req.body.name});
    
    if (deleteResult.deletedCount === 0) {
        return res.send({errMsg: "Delete failed, no matches found, nothing was deleted"});
    } else if (deleteResult.acknowledged === false) {
        return res.send({errMsg: "Delete failed"});
    } else {
        return res.send({successMsg: `Succesfully deleted the article with the name: ${req.body.name}`});
    }
}));


/*
GET METHOD REGARDING A LANGUAGE
The /countries/:languages route allows us to find all the countries where a certain language is spoken
if you want to find Portuguese, you would use http://localhost:3000/countries/Portuguese
Handle get requests to the /countries/:language route
*/
router.route("/:language")
.get(tryCatchAsync(async(req, res, next) => {

    const getResult =  await Country.find({languages: req.params.language});

    if (getResult.length === 0) {
        return res.send({errMsg: "No countries match that language"});
    } else {
        return res.send(getResult);
    }

}));


export default router;