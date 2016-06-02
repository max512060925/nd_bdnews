var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var orm = require('orm');
var nominate = require('../db/dbnominate')(router),
    hundred = require('../db/dbhundred')(router),
    local = require('../db/bdlocal')(router),
    entertainment = require('../db/bdentertainment')(router);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/1', nominate.select);
router.get('/2', hundred.select);
router.get('/3', local.select);
router.get('/4', entertainment.select);
router.post('/refresh/1', nominate.refresh);
router.post('/refresh/2', hundred.refresh);
router.post('/refresh/3', local.refresh);
router.post('/refresh/4', entertainment.refresh);


module.exports = router;
