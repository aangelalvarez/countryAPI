import express from "express";
let router = express.Router();

router.get("/", (req, res, next) => {
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
        errorMsg: "The above mentioned error object will not show up when using the get method, unless the query is not valid",
        note: "If the name of the country or language has a space, replace it with %20 in the query. Mandarin Chinese would be Mandarin%20Chinese",
        disclaimer: "The list is based on the official languages of each country, if there is no official language, then the most popular languages are shown"
    });
});

export default router;
