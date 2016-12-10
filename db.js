const Sequelize = require('sequelize');
//create the database connection. we'll export this out so we can use it in other places in the app
//be sure to edit to change 'natemaddrey' to your specific username
//'music-api' is the name of the database
const db = new Sequelize('postgres://kentonlin@localhost:5432/savr');


//export out the databsae connection to be used elsewhere (for example, creating models and accessing our database in our API)
module.exports = db;
