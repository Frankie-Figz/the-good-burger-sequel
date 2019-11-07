// Require the models to be able to use the db tables
const db = require("../models");

// Create all our routes and set up logic within those routes where required.
module.exports = function(app){
  app.get("/", function(req, res) {

    db.Burgers.findAll({}).then(function(dbTodo) {
      // console.log("I am here at the find all");
      // console.log(res);
  
      var hbsObject = {
        burgers: dbTodo
      };

      res.render("index", hbsObject);
  
    });
  });

  //Function used for creating new burgers 
  app.post("/api/burgers", function(req, res) {  
    console.log("I am here at the post !");
    console.log(req.body);
  
    db.Burgers.create({
      burgername:  req.body.burgername
    }).then(function(dbTodo){
      console.log("I am here ");
      console.log(dbTodo.dataValues.id);
      console.log("This is where I am needed");
      res.json(dbTodo);
    });
  });
  
  // Function use to update burgers
  app.put("/api/burgers/:id", function(req, res) {
    console.log("I am here at the update function !");
    console.log(req.body);
    db.Burgers.update(
      {devoured: req.body.devoured},
      {where: {id : req.params.id}}).then(function(dbTodo){
        console.log("This is an updated call !");
      if (dbTodo.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
    
  });
  
  app.delete("/api/burgers/:id", function(req, res) {
    db.Burgers.destroy({
      where : {id : req.params.id}}).then(function(dbTodo){
      if (dbTodo.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
};