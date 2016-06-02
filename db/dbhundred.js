/**
 * Created by snoop on 2016/5/30.
 */
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
            models.hundred = db.define("hundred", {
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
            req.models.hundred.create({
                newstitle: req.body.newstitle,
                newsimg: req.body.newsimg,
                newscontent: req.body.newscontent,
                addtime: moment(req.body.addtime).format('YYYY-MM-DD')
            }, function(err) {
                if (err) throw err;
                res.json({"success":true,"msg":"创建成功"});
                next();
        });
    },
        // 删除数据
        del: function(req, res, next) {
            req.models.hundred.find({
                newsid: req.body.newsid
            }, function (err, hundred) {
                if (err) throw err;
                hundred[0].remove(function (err) {
                    if (err) throw err;
                    res.json({"success": true, "msg": "删除成功"});
                });
            });
        },
        // 修改数据
        update: function(req, res, next) {
            req.models.hundred.find({
                newsid: req.body.newsid
            }, function(err, hundred) {
                if (err) throw err;
                hundred[0].newstitle = req.body.newstitle;
                hundred[0].newsimg = req.body.newsimg;
                hundred[0].newscontent = req.body.newscontent;
                hundred[0].addtime = moment(req.body.addtime).format('YYYY-MM-DD');
                hundred[0].save(function(err) {
                    if (err) throw err;
                    res.json({"success":true,"msg":"更新成功"});
                });
            });
        },
        //查询
        select: function(req, res, next) {
            req.models.hundred.find({}, function(err, hundred) {
                if (err) throw err;
                res.json(hundred);
            });
        },
        //刷新
        refresh: function(req, res, next) {
            req.models.hundred.find({}).limit(5).run(function (err, hundred) {
                if (err) throw err;
                res.json(hundred);
            });
        }
    };

    return dbs;
};