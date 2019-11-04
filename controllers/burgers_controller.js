var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions (OLD)
// var burger = require("../models/burger.js");
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

  // This is equivalent to getAll() but for ORM
  // burger.all(function(data) {

  //   var hbsObject = {
  //     burgers: data
  //   };

  //   console.log(hbsObject);
  //   res.render("index", hbsObject);

  // });

  db.Burgers.findAll({}).then(function(dbTodo) {

    var hbsObject = {
      burgers: dbTodo
    };

    console.log(hbsObject);
    res.json(dbTodo);
    res.render("index", hbsObject);

  });

});

router.post("/api/burgers", function(req, res) {
  console.log(req.body);

  // This is equivalent to create()
  burger.create(["burgername", "devoured"], [
    req.body.name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });

  db.Burgers.create({
    name:  req.body.name,
    devoured: req.body.devoured
  }).then(function(dbTodo){
    res.json(dbTodo);
  });

});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  // This is equivalente to update
  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  // This is equivalent to destroy
  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;