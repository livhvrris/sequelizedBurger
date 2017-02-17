var db = require("../models");

module.exports = function(app) {

    app.get("/", function(request, response) {
        response.redirect("/burger");
    });

    app.get("/burger", function(request, response) {
        db.burger.findAll({order: [["id"]]}).then(function(dbBurger){
            var hbsObject = {
                burger: dbBurger
            };
            response.render("index", hbsObject);
        });
    });

    app.post("/burger/create", function(request, response) {
        db.burger.create({
            burger_type: request.body.burger_type
        }).then(function(dbBurger){
            response.redirect("/burger");
        });
    });

    app.put("/burger/update/:id", function(request, response) {

        var condition = "id = " + req.params.id;

        db.burgers.update({
            devoured: req.body.devoured
        }, {
            where: {
                id: req.params.id
            }
        }).then(function() {
            res.redirect("/burgers");
        });

    });


};