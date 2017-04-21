var express = require('express');
var router = express.Router();
var trainer = require('../models/trainer');
var db = require('../dbconnection');

/* GET users listing. */
router.get('/:name', function (req, res, next) {

  trainer.getmytrainings(req.params.name, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
})

router.post('/searchTrainings/', function (req, res, next) {

  trainer.getsearchtrainings(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
})

router.get('/trainings/:id', function (req, res, next) {
  console.log('request id :'+req.params.id);
  trainer.getTraining(req.params.id, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
})

router.post('/addScenario/', function (req, res, next) {

  trainer.addScenario(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
})

router.post('/completeTraining/', function (req, res, next) {
  console.log(req.body.id);
  trainer.updateTraining(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
})

router.get('/scenarios/:id', function (req, res, next) {
  console.log('request id :'+req.params.id);
  trainer.getScenarios(req.params.id, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
})

router.post('/completeScenario/', function (req, res, next) {
  //console.log(req.body.id);
  trainer.updateScenario(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
})

module.exports = router;
