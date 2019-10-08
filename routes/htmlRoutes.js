var db = require("../models");
var path = require("path");


module.exports = function (app) {

    app.get("/", function(req, res){


        res.render("index");
    })

    app.get("/admin", function(req, res){

        db.Category.find({}, null, {sort: {category: 1}}).then(function(dbCategories){
            
            db.Maincaption.find({featured: true}, null, {sort: {updatedAt: -1}}).then(function(dbCaptions){


            res.render("admin", {
                categories: dbCategories,
                captions: dbCaptions
            })
            })

        })

    });

    app.get("/user", function(req, res){

        db.Category.find({}, null, {sort: {category: 1}}).then(function(dbCategories){
            
            db.Communitycaption.find({username: "testuser"}, null, {sort: {updatedAt: -1}}).then(function(dbCaptions){


            res.render("userDashboard", {
                categories: dbCategories,
                captions: dbCaptions
            })
            })

        })

    });

    app.get("/user/view/mycaptions", function(req, res){

        db.Communitycaption.find({ username: "testuser"}).then(function(dbCaptions) {

            res.render("userCaptionTable", {
                captions: dbCaptions
            })
        })
    })


    app.get("/admin/view/maincaptions", function(req, res) {

        db.Maincaption.find({}).then(function(dbCaptions) {

            res.render("mainCaptionTable", {
                captions: dbCaptions
            })
        })
    });

    app.get("/admin/view/live/maincaptions", function(req, res) {

        db.Maincaption.find({}, null, {sort: {updatedAt: -1}}).then(function(dbCaptions){

            db.Category.find({}).then(function(dbCategories){
                res.render("liveTableMain", {
                    captions: dbCaptions,
                    categories: dbCategories
                })
            })
        })
    });

    app.get("/user/view/live/mycaptions", function(req, res) {

        db.Communitycaption.find({username: "evanjcleary"}, null, {sort: {updatedAt: -1}}).then(function(dbCaptions){

            db.Category.find({}).then(function(dbCategories){
                res.render("liveTableUser", {
                    captions: dbCaptions,
                    categories: dbCategories
                })
            })
        })
    });
 
    app.get("/admin/view/live/test", function(req, res) {

        db.Maincaption.find({}).then(function(dbCaptions){


            res.render("liveTableTest", {
                captions: dbCaptions
            })
        })
    });

}