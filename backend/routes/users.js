var express = require('express');
var router = express.Router();
var user = require('../models/user');
var db = require('../dbconnection');

/* GET users listing. */
router.get('/', function(req, res, next) {
  user.getAllusers( function(err,rows){
    if(err){ 
      res.json(err); 
    }
    else{
      res.json(rows);
    }
  });
});

router.post('/', function(req,res,next){
 // console.log("hahahah" + req.body.username + " "+req.body.password+" "+req.body.role);
  
  /*
  db.query('select * from user where username="' + req.body.username +'" and password="' + req.body.password + '"'
    ,function(err,result){
        if(err) { 
            console.log(err);
        }
        else{
            if(result.length > 0)
                 res.send(result);            
            else                
                 res.send([{'firstname' : 'No user found'}]);
            
        }
    });
  */
  user.login(req.body, function(err,rows){
    if(err){ 
      res.send(err); 
    }
    else{
      if(rows.length > 0)
      {
        console.log('success 1234  '+ rows);
        res.json(rows[0]);
      }
      else
      {
        console.log('failed with no data');
        res.json(rows[0]);
      } 
    }
  });
})

module.exports = router;
