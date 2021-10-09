// DEPLOYMENT VERSION OF THE API
// ROUTER AND ASYNCRHONOUS REQUESTS ADDED
// READY TO BE DEPLOYED 

import express from "express";
import {insertCountriesToDB, mongooseConnect} from "./database.js";
import { requestInfo, handleError } from "./middleware.js";
import countriesRoutes from "./routes/countries.js";
import countryRoutes from "./routes/country.js";
import defaultRoutes from "./routes/default.js";
import invalidRoutes from "./routes/invalidRoutes.js";

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";
const app = express();

// MIDDLEWARE
// This allows us to get the body of http requests
app.use(express.urlencoded({extended: true}));
// Log the request info
app.use(requestInfo);
// Handle errors
app.use(handleError);

// DATABASE
// Conect to the mongoose server
mongooseConnect();
// Add countries to the Database if they are not already added
insertCountriesToDB();


// ROUTES
app.use(defaultRoutes); // GET request to the main route "/"
app.use("/countries", countriesRoutes);
app.use("/country", countryRoutes);
app.use(invalidRoutes); // Handle all invalid routes and methods


// SERVER
app.listen(PORT, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});