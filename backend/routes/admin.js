var express = require('express');
var router = express.Router();
var admin = require('../models/admin');
var db = require('../dbconnection');

router.post('/addUser', function (req, res, next) {
  admin.adduser(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
})

router.get('/users', function (req, res, next) {
  admin.getusers(function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
})

router.get('/users/:search', function (req, res, next) {
  admin.getsearchusers(req.params.search, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
})

router.post('/updateRole', function (req, res, next) {
  admin.updateRole(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      admin.getusers(function (err, rows) {
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
      });
    }
  });
})

router.post('/updateStatus', function (req, res, next) {
  admin.updateStatus(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      admin.getusers(function (err, rows) {
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
      });
    }
  });
})

router.post('/addTraining', function (req, res, next) {
  admin.addTraining(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
})

router.get('/trainings', function (req, res, next) {
  admin.gettrainings(function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
})

router.get('/trainings/:search', function (req, res, next) {
  admin.getsearchtrainings(req.params.search, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
})

module.exports = router;
