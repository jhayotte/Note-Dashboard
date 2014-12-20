/**
* Created with t.
* User: jhayotte
* Date: 2014-12-20
* Time: 03:42 PM
* To change this template use Tools | Templates.
*/
(function(controllers){
    var homeControllers = require("./homeController");
    var notesController = require("./notesController");
    
    controllers.init = function(app){
        homeControllers.init(app);        
        notesController.init(app);
    };
    
})(module.exports);