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
            models.entertainment = db.define("entertainment", {
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
            req.models.entertainment.create({
                newstitle: req.body.newstitle,
                newsimg: req.body.newsimg,
                newscontent: req.body.newscontent,
                addtime: moment(req.body.addtime).format('YYYY-MM-DD')
            }, function(err) {
                if (err) throw err;
                res.json({success:true,msg:"创建成功"});
        });
    },

        // 删除数据
        del: function(req, res, next) {
            req.models.entertainment.find({
                newsid: req.body.newsid
            }, function(err, entertainment) {
                if (err) throw err;
                entertainment[0].remove(function(err) {
                    if (err) throw err;
                    res.json({"success":true,"msg":"删除成功"});
            });
        });
    },

        // 修改数据
        update: function(req, res, next) {
            req.models.entertainment.find({
                newsid: req.body.newsid
            }, function(err, entertainment) {
                if (err) throw err;
                entertainment[0].newstitle = req.body.newstitle;
                entertainment[0].newsimg = req.body.newsimg;
                entertainment[0].newscontent = req.body.newscontent;
                entertainment[0].addtime = moment(req.body.addtime).format('YYYY-MM-DD');
                entertainment[0].save(function(err) {
                    if (err) throw err;
                    res.json({"success":true,"msg":"更新成功"});
            });
        });
    },

        // 查询
        select: function(req, res, next) {
            req.models.entertainment.find({}, function(err, entertainment) {
                if (err) throw err;
                res.json(entertainment);
            });
        },
        //刷新
        refresh: function(req, res, next) {
            req.models.entertainment.find({}).limit(5).run(function (err, entertainment) {
                if (err) throw err;
                res.json(entertainment);
            });
        }
    };

return dbs;
}
