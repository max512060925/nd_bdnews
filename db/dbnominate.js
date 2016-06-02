var express = require('express');
var orm = require('orm');
var moment = require("moment");

// 服务器的配置
var dbusername = 'root';
var dbpassword = '';
var dbname = 'bdnews';

// 导入到路由
module.exports = function(router) {
    // 数据库设置
    router.use(orm.express("mysql://" + dbusername + ":" + dbpassword + "@localhost/" + dbname, {
        define: function(db, models, next) {
            models.nominate = db.define("nominate", {
                newsid: { type: 'serial', key: true },
                newstitle: String,
                newsimg: String,
                newscontent: String,
                addtime: Date
            });
            next();
        }
    }));
    // 数据库操作
    var dbs = {
        // 插入数据
        create: function(req, res, next) {
            req.models.nominate.create({
                newstitle: req.body.newstitle,
                newsimg: req.body.newsimg,
                newscontent: req.body.newscontent,
                addtime: moment(req.body.addtime).format('YYYY-MM-DD')
            }, function(err) {
                if (err) throw err;
                res.json({"success":true,"msg":"创建成功"});
            });
        },

        // 删除数据
        del: function(req, res, next) {
            req.models.nominate.find({
                newsid: req.body.newsid
            }, function(err, nominate) {
                if (err) throw err;
                nominate[0].remove(function(err) {
                    if (err) throw err;
                    res.json({"success":true,"msg":"删除成功"});
                });
            });
        },

        // 修改数据
        update: function(req, res, next) {
            req.models.nominate.find({
                newsid: req.body.newsid
            }, function(err, nominate) {
                if (err) throw err;
                nominate[0].newstitle = req.body.newstitle;
                nominate[0].newsimg = req.body.newsimg;
                nominate[0].newscontent = req.body.newscontent;
                nominate[0].addtime= moment(req.body.addtime).format('YYYY-MM-DD');
                nominate[0].save(function(err) {
                    if (err) throw err;
                    res.json({"success":true,"msg":"更新成功"});
                });
            });
        },

        // 查询
        select: function(req, res, next) {
            req.models.nominate.find({}, function(err, nominate) {
                if (err) throw err;
                res.json(nominate);
            });
        },
        //刷新
        refresh: function(req, res, next) {
            req.models.nominate.find({}).limit(5).run(function (err, nominate) {
                if (err) throw err;
                res.json(nominate);
            });
        }
    };

    return dbs;
};