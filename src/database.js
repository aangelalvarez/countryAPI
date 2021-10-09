import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import mongoose from "mongoose";
import countryLangsArray from "./countrydata.js";
dotenv.config({path: `${__dirname}/.env`});

// Connect to the mongo server
const mongooseConnect = async() => {
    try {
        await mongoose.connect(`mongodb+srv://angel:${process.env.MONGO_ATLAS_PASSWORD}@countries.p24cn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
        console.log("Successfuly connected to the database");
    } catch (e) {
        console.log("Failed to connect to the database",'\n', e);
    }
}

const insertCountriesToDB = async() => {
    try {
        let countryDBLen = await Country.find();
        if (countryDBLen.length === 0) {
            await Country.insertMany(countryLangsArray);
            console.log("Countries added to the database");
        }
    } catch (e) {
        console.log("Failed to insert countries into the database",'\n', e);
    }

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
const Country = mongoose.model("Country", countrySchema);


const requestSchema = new mongoose.Schema({
    method: {
        type: String,
        required: true
    },
    route: {
        type: String,
        required: true
    },
    IP: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const Request = mongoose.model("Request", requestSchema);

export {Country, mongooseConnect, insertCountriesToDB, Request};
