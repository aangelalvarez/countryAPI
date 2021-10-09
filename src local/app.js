// DATABASE VERSION OF THE API, YOU NEED TO START A MONGO SERVER BEFORE USING npm start, USE THE COMMAND 
// mongod IN YOUR TERMINAL TO START YOUR OWN MONGO SERVER, THEN USE npm start TO START THIS API'S SERVER
// THIS IS NOT THE READY-TO-DEPLOY VERSION, ONLY FOR LOCAL TESTING
import express from "express";
import countryLangsArray from "./countrydata.js";
import {Country, mongooseConnect} from "./database.js";

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";
const app = express();

// This allows us to get the body of http requests
app.use(express.urlencoded({extended: true}));

// Conect to the mongoose server
mongooseConnect();

// Add countries to the Database if they are not already added
if(!Country.find()){
    Country.insertMany(countryLangsArray);
}



// DEFAULT ROUTE
// Default route, it shows some basic rules on how to work with this API
app.get("/", (req, res) => {
    res.send({
        title: "Country Languages API",
        description: "With this API, you can find what languages are spoken in a specific country, you can also find what countries speak a specific language",
        database: "This version of the API requires a mongoDB server",
        startDatabase: "Download and install the mongoDB shell into your computer, then open your terminal and type 'mongod' to start the mongo server",
        server: "Type 'npm start' in your terminal to start the API server",
        getAll: "To get all the countries and languages available, use the route /countries",
        searchCountry: "To find what languages are spoken in a specific country use /country/<countryName> replace <countryName> with the name of the country",
        searchLanguage: "To find all the countries where a language is spoken, use /countries/<language> replace <language> with the language you want to search",
        postCountry: "To insert a new country, use the post method, you must provide both the 'name' and the 'languages' keys",
        putCountry: "To put a country, use the put method, you must provide the current 'name', the 'newName', and the 'newLanguages' keys",
        patchCountry: "To patch a country you must provide the current 'name' key, and either the 'newName' OR the 'newLanguages' key, not both",
        deleteCountry: "To delete a country, use the delete method, you must provide the 'name' key",
        errors: "At the end of every request you will get an object indicating either a success message ({sucessMsg: 'content'}), or an error message ({errMsg: 'content'})",
        errorMsg: "This object will not show up when using the get method, unless the query is not valid",
        note: "If the name of the country or language has a space, replace it with %20, Mandarin Chinese would be Mandarin%20Chinese",
        disclaimer: "The list is based on the official languages of each country, if there is no official language, then the most popular languages are shown"
    });
});



/*
ROUTES REGARDING ALL ARTICLES
The /countries route is our main route for handling data, here we can get all the countries and their languages (get), 
add new entries (post), put to an existing article (put) (update name and languages), patch an existing 
article (patch) (update either name or language), and delete existing ones (delete).
*/
app.route("/countries")
// Handle get requests to the /countries route
// The get method allows us to get all the countries and its languages
// THE 'e' PARAMETER STANDS FOR ERROR
.get((req, res) => {
    Country.find((e, foundCountries) => {
        if(e) {
            res.send({errMsg: e});
        } else {
            res.send(foundCountries);
        }
    });
})
// Handle post requests to the /countries route
// The post method inserts a new article, you must provide the 'name' and 'languages' keys
.post((req, res) => {
    if(!req.body.name || !req.body.languages) {
        return res.send({errMsg: "Post failed, you must provide both 'name' of the country and its 'languages'"});
        // The return before the res.send() functions allows us to avoid getting errors because the app tries to 
        // use the send method more than once
    }

    const newCountryEntry = new Country({
        name: req.body.name,
        languages: req.body.languages
    }); // e stands for error
     newCountryEntry.save((e) => {
        if(e) {
            res.send({errMsg: e});
        } else {
            res.send({successMsg: `A new entry with the following properties has been added {name: ${req.body.name}, languages: ${req.body.languages} }`});
        }
    });
})
// Handle put requests to the /countries route
// The put method updates a whole article, you must provide the current 'name', the 'newName', and the 'newLanguages'
.put((req, res) => {
    if(!req.body.name || !req.body.newName || !req.body.newLanguages) {
        return res.send({errMsg: "Put failed, you must provide the previous 'name', the 'newName', and the 'newLanguages'"});
    } else if (req.body.name === req.body.newName) {
        return res.send({errMsg: "Put failed, the 'name' cannot be the same as the 'newName'"});
    }
    const newCountryPut = { 
        name: req.body.newName,
        languages: req.body.newLanguages
    };
    
    Country.replaceOne({name: req.body.name}, newCountryPut, (e, result) => {
        if (e) {
            return res.send({errMsg: e});
        } else if (result.matchedCount === 0) {  // result.matchedCount returns the entries that matched the query
            return res.send({errMsg: "Put failed, no matches found, if you want to add a new article try using the post method"});
        } else {
            return res.send({successMsg: `Successfully put the article, it is now: {name: ${req.body.newName},languages: ${req.body.newLanguages}}`});
        }
    });
})
// Handle patch requests to the /countries route
// The patch method updates a value of one of the articles, you must provide the current 'name', and either
// the 'newName' or the 'newLanguage', but not both
.patch((req, res) => {
    if (!req.body.name) {
        return res.send({errMsg: "Patch failed, you must provide the 'name' of the country to be patched"});
    } else if (req.body.newName && req.body.newLanguages) {
        return res.send({errMsg: "Patch failed, you must provide one of the keys to be patched, either 'newName' or 'newLanguage', but not both"});
    } else if (req.body.name && (!req.body.newName && !req.body.newLanguages)) {
        return res.send({errMsg: "Patch failed, you must provide the original 'name', and either the 'newName' or the 'newLanguages'"})
    } else {
        if (req.body.newName || req.body.newLanguages) {

            if (req.body.newName) {

                Country.updateOne({name: req.body.name}, {name: req.body.newName}, (e, result) => {
                    if (e) {
                        return res.send({errMsg: e});
                    } else if (result.matchedCount === 0) {  // result.n returns the entries that matched the query
                        return res.send({errMsg: "Patch failed, no matches found"});
                    } else {
                        return res.send({successMsg: `Successfully patched the article, the name is now: {name: ${req.body.newName}}`});
                    }
                });
            }
    
            if (req.body.newLanguages) {

                Country.updateOne({name: req.body.name}, {languages: req.body.newLanguages}, (e, result) => {
                    if (e) {
                        return res.send({errMsg: e});
                    } else if (result.matchedCount === 0) { // result.n returns the entries that matched the query
                        return res.send({errMsg: "Patch failed, no matches found"});
                    } else {
                        return res.send({successMsg: `Successfully patched the article, the languages are now: {languages: ${req.body.newLanguages}}`});
                    }
                });
            }
        }
    }    
})
// Handle delete requests to the /countries route
// The delete method allows us to delete an article, you must provide the current 'name' of the article
.delete((req, res) => {
    if (!req.body.name) {
        return res.send({errMsg: "Delete error, you must provide the 'name' of the object to be deleted"});
    }

    Country.deleteOne({name: req.body.name}, (e, result) => {
        if (e) {
            return res.send({errMsg: e});
        } else if (result.deletedCount === 0) {
            return res.send({errMsg: "Delete failed, no matches found, nothing was deleted"});
        } else {
            return res.send({successMsg: `Succesfully deleted the article with the name: ${req.body.name}`});
        }
    });
});



/*
GET METHOD REGARDING A COUNTRY
The /languages/:country route allows us to get a specific country
if you want to find Mexico, you would use http://localhost:3000/country/Mexico
Handle get requests to the /country/:country route
*/
app.get("/country/:country", (req, res) => {
    //Find country by name
    Country.findOne({name: req.params.country}, (e, foundCountry) => {
        if(e) {
            return res.send({errMsg: e});
        } else if (!foundCountry) {
            return res.send({errMsg: "No countries match that name"});
        } else {
            return res.send(foundCountry);
        }
    });
});



/*
GET METHOD REGARDING A LANGUAGE
The /countries/:languages route allows us to find all the countries where a certain language is spoken
if you want to find Portuguese, you would use http://localhost:3000/countries/Portuguese
Handle get requests to the /countries/:language route
*/
app.get("/countries/:language", (req, res) => {

    Country.find({languages: req.params.language}, (e, foundCountries) => {
        if (e) {
            return res.send({errMsg: e});
        } else if (foundCountries.length === 0) {
            return res.send({errMsg: "No countries match that language"});
        } else {
            return res.send(foundCountries);
        }
    });

});


// Handle all the invalid routes by redirecting to the home page
app.get("*",(req, res) => {
    res.redirect("/");
});



// Server
app.listen(PORT, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});