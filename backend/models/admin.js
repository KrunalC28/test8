var db = require('../dbconnection');

var admin = {
    
    adduser:function(user, callback){
        return db.query("insert into user values (?,?,?,?,?,?)",
        [user.username,user.firstname,user.lastname,user.password,user.role,'active'], callback);
    },

    addTraining:function(training, callback){
        return db.query("insert into training (title,taudience,trainer,starttime,endtime,location,isStart,isComplete,department,date)values (?,?,?,?,?,?,?,?,?,?)",
        [training.title,training.taudience,training.trainer,
        training.starttime,training.endtime,training.location,'No','No',training.department,training.date], callback);
    },

    getusers:function(callback){
        return db.query("select * from user", callback);
    },

    gettrainings:function(callback){
        return db.query("select * from training", callback);
    },
    
    getsearchusers:function(searchText,callback){
        return db.query("select * from user where username like ?",'%' + searchText + '%', callback);
    },

    getsearchtrainings:function(searchText,callback){
        return db.query("select * from training where title like ?",'%' + searchText + '%', callback);
    },

    updateRole:function(body,callback){
        return db.query("update user set role=? where username=?",[body.role,body.id], callback);
    },

    updateStatus:function(body,callback){
        return db.query("update user set isActive=? where username=?",[body.status,body.id], callback);
    },
};

module.exports = admin;