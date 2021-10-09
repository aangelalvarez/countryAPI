import mongoose from "mongoose";

// Connect to the mongo server
async function mongooseConnect(){
    await mongoose.connect("mongodb://localhost:27017/countriesDB");
}
/*
Schema for adding new countries
The type mongoose.Schema.Types.Mixed allows us to use multiple data types for the languages key
Use either a string or a string array for the languages key
*/
const countrySchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true
    },
    languages: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    }
});

// Model for entries
const Country = mongoose.model("CountryLanguage", countrySchema);

export {Country, mongooseConnect};
