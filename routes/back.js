var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var orm = require('orm');
var nominate = require('../db/dbnominate')(router),
    hundred = require('../db/dbhundred')(router),
    local = require('../db/bdlocal')(router),
    entertainment = require('../db/bdentertainment')(router);
/* GET users listing. */
router.get('/back', function(req, res, next) {
  res.render('back');
});
router.get('/back/1', nominate.select);
router.get('/back/2', hundred.select);
router.get('/back/3', local.select);
router.get('/back/4', entertainment.select);
router.post('/back/create/1', nominate.create);
router.post('/back/create/2', hundred.create);
router.post('/back/create/3', local.create);
router.post('/back/create/4', entertainment.create);
router.post('/back/update/1', nominate.update);
router.post('/back/update/2', hundred.update);
router.post('/back/update/3', local.update);
router.post('/back/update/4', entertainment.update);
router.post('/back/del/1', nominate.del);
router.post('/back/del/2', hundred.del);
router.post('/back/del/3', local.del);
router.post('/back/del/4', entertainment.del);

module.exports = router;
