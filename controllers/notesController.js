// notesController.js
(function (notesController) {

  var data = require("../data");

  notesController.init  = function (app) {
  
    console.log("notesCo");
    
    
    
    app.get("/api/notes/:categoryName", function (req, res) {

      var categoryName = req.params.categoryName;
console.log("params:" + categoryName);
      data.getNotes(categoryName, function (err, notes) {
        if (err) {
          res.send(400, err);
        } else {
          res.set("Content-Type", "application/json");
          res.send(notes.notes);
        }
      }); 
    }); 

    app.post("/api/notes/:categoryName", function (req, res) {

      var categoryName = req.params.categoryName;

      var noteToInsert = {
        note: req.body.note,
        color: req.body.color,
        author: "Shawn Wildermuth"
      };

      data.addNote(categoryName, noteToInsert, function (err) {
        if (err) { 
          res.send(400, "Failed to add note to data store");
        } else {
          res.set("Content-Type", "application/json");
          res.status(201).send(noteToInsert);
        }
      });

    });

  };

})(module.exports);