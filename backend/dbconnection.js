var mysql = require('mysql');
var connection = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'?123',
    database:'nodedemo'
});

module.exports = connection;