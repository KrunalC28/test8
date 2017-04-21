var db = require('../dbconnection');

var user = {

    getAllusers:function(callback){
        return db.query("select * from user", callback);
    },

    getUser : function(username,callback){
        return db.query("select * from user where username=?",[username],callback);
    },

    login : function(body,callback){
        return db.query('select * from user where username="' + body.username +'" and password="' + body.password + '"',callback);
    }
};

module.exports = user;