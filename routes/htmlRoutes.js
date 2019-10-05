var db = require("../models");
var path = require("path");


module.exports = function (app) {

    app.get("/", function(req, res){


        res.render("index");
    })

    app.get("/admin", function(req, res){

        db.Category.find({}, null, {sort: {category: 1}}).then(function(dbCategories){
            
            res.render("admin", {
                categories: dbCategories
            })
        })

    });

    app.get("/admin/view/maincaptions", function(req, res) {

        db.Maincaption.find({}).then(function(dbCaptions) {

            res.render("mainCaptionTable", {
                captions: dbCaptions
            })
        })
    });

}