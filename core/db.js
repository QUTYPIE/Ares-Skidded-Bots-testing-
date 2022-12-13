const { Database } = require('quickmongo');
const db = new Database('mongodb+srv://vishalop:dIPcT3q39UaRgt1e@velocity.s0fpx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
db.connect().then(() => console.log('[ MONGO DB ] Connected to Mongo Database!'));

module.exports = db;