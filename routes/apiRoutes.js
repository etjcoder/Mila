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
            .then(function (dbCaption) {
                console.log(dbCaption);
                db.Maincaption.updateOne({ _id: dbCaption._id }, { $set: { tags: splicedArr } }, function (err) {
                    if (err) return res.send("maincaption addMsg error " + err);
                    // console.log('The number of documents was %d', numAffected);
                    // console.log('The raw response from Mongo was', rawResponse);
                });
                // console.log('dbCaption reads as: ' + dbCaption);
                // res.json(dbCaption);
            });
    });

    //This route handles the submission of a new category on the Admin page
    app.post("/admin/submit/category", function (req, res) {
        console.log(req.body);

        db.Category.create(req.body)
            .then(function (dbCategory) {
                res.json(dbCategory)
            })
    })


    app.put("/admin/maincaptions/edit/:id", function (req, res) {

        var id = req.params.id;
        console.log(id)
        console.log(req.body);
        var lyricBoolean = false;
        var quoteBoolean = false;
        var lowerCaseTags = req.body.tags.toLowerCase();
        var splicedArr = lowerCaseTags.split(',')
        console.log(splicedArr);

        if (req.body.lyric === "true") {
            lyricBoolean = true;
        }

        if (req.body.quote === "true") {
            quoteBoolean = true;
        }

        // setTimeout(function () {
        db.Maincaption.update({ _id: id },
            {
                caption: req.body.caption,
                category: req.body.category,
                tags: splicedArr,
                author: req.body.author,
                reference: req.body.reference,
                lyric: req.body.lyric,
                quote: req.body.quote,
                originalAuthor: req.body.originalAuthor,
                likes: req.body.likes
            }

        ).then(function (dbCaptions) {


            console.log(dbCaptions)
        })
        // }, 1000)
        // db.Maincaption.update({ _id: id },
        //     {
        //         caption: req.body.caption,
        //         category: req.body.category,
        //         tags: req.body.tags,
        //         author: req.body.author,
        //         reference: req.body.reference,
        //         lyric: req.body.lyric,
        //         quote: req.body.quote,
        //         originalAuthor: req.body.originalAuthor,
        //         likes: req.body.likes
        //     })
        //     .then(function (dbCaption) {
        //         console.log(dbCaption)
        //     })
        //     .catch(function (err) {
        //         res.json(err)
        //     })

    })

    app.post("/admin/maincaptions/delete/:id", function(req, res) {

    var id = req.params.id;

    db.Maincaption.remove({ _id: id })
        .then(function (dbCaption) {
            res.json(dbCaption);
        });
    
    });

    app.put("/admin/maincaptions/feature/:id", function (req, res) {

        var id = req.params.id;

        // setTimeout(function () {
        db.Maincaption.update({ _id: id },
            {
                featured: req.body.featured
            }

        ).then(function (dbCaptions) {

            console.log(dbCaptions)
        })

    })







}