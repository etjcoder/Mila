var db = require("../models");
var path = require("path");

module.exports = function (app) {

    //This route handles the submission of a new caption on the Admin page
   app.post("/admin/submit/caption", function (req, res) {
    console.log(req.body);
    var lowerCaseTags = req.body.tags.toLowerCase();
    var splicedArr = lowerCaseTags.split(', ')
    console.log(splicedArr);

    db.Maincaption.create(req.body)
        .then(function(dbCaption){
            console.log(dbCaption);
            db.Maincaption.updateOne({_id: dbCaption._id}, {$set: {tags: splicedArr}}, function(err) {
                if (err) return res.send("maincaption addMsg error " + err);
                // console.log('The number of documents was %d', numAffected);
                // console.log('The raw response from Mongo was', rawResponse);
            });
            // console.log('dbCaption reads as: ' + dbCaption);
            // res.json(dbCaption);
        });
   });






}