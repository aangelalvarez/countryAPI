# Country Languages API
With this API, you are able to find what languages are spoken in a specific country, as well as in what countries is a specific language spoken. There are three versions of this API, one does not require a database, it works with the countrydata.js file. The second version requires the use of mongoDB. Both of those are for local testing and development, they are found in the folder "src local". The third version, which can be found in the "src" folder, is a version that is ready for deployment. It handles asynchronous requests and errors. Instructions on how to use the local versions can be found below.

This is a RESTful API that allows you to implement CRUD operations  
* ###### Create new entries
* ###### Read from the existent entries
* ###### Update existent entries, you can update either the languages, the name, or both
* ###### Delete entries 

Adicionally, you can:
* ###### Get all the existing countries
* ###### Find what languages are spoken in a specific country
* ###### Find all the countries where a specific language is spoken 



### This project requires the following packages in order to run properly

* ##### express 

* ##### mongoose (Only for the version with Database)

* ##### nodemon

* ##### dotenv



###### Remember that you need to start a local express server in order to run this app, in your terminal, go to the folder of the project and type npm start. After that, open another tab of the terminal and type mongod in order to start a local mongo server

 Make sure that you package.json contains the following value:
 
  "scripts": {
    "start": "nodemon src local/app.js"
 },
 
 If you want to use the version with no database, then replace this: 
 
 "scripts": {
    "start": "nodemon src local/app.js"
 },

 with this in your package.json:
 
 "scripts": {
    "start": "nodemon src local/appnoDB.js"
 },