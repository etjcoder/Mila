var db = require("../models");
var path = require("path");

module.exports = function (app) {

    app.get("/", function(req, res){


        res.render("index");
    })

    app.get("/admin", function(req, res){

        var categoryArray = [];
        var hbsObject = [];

        db.Category.find({}).then(function(data){
            
            hbsObject = {
                categories: data
            };

            // for (i = 0; i < data.length; i++) {
            //     categoryArray.push(data[i]);
            // }

        })


        res.render("admin", hbsObject)
    })


}