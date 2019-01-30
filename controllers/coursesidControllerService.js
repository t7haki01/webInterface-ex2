'use strict'
var data = require('./data');
var courses = data.courses;

module.exports.getCourseById = function getCourseById(req, res, next) {

  var result = "There is no such a course which Id is " + req.params.Id
    for(var i = 0; i < courses.length; i++){
        if(parseInt(req.params.Id) === courses[i].Id){
            result = courses[i];
        }
    }
    res.send(result);
};

module.exports.putCourseById = function putCourseById(req, res, next) {
  console.log(req.params)
  var isThere = false;
    var isAllowed = true;
    //First checking which courses for editing with id
    for(var i = 0; i<courses.length; i++){
        if(courses[i].Id === parseInt(req.params.Id)){
            isThere = true;
            //Then checking for when editing the id, it supposed not to same with others
            for(var j = 0; j<courses.length; j++){
                if(parseInt(req.body.Id) !== parseInt(req.params.Id) && courses[j].Id === parseInt(req.body.Id)){
                    res.send("Id already exist, same Id not allowed!");
                    isAllowed = false;
                    break;
                }
            }
            if(isAllowed){
                courses[i].Id = parseInt(req.body.Id);
                courses[i].Name = req.body.Name;
                courses[i].Description = req.body.Description;
                courses[i].enrolledStudents = req.body.enrolledStudents;
                var result = courses[i]
            }
        }
    }
    if(isThere && isAllowed){
        console.log("Successfully Editted");
        res.send(result);
    }else{
        res.send("Something went wrong!");
    }
};

module.exports.deleteCourseById = function deleteCourseById(req, res, next) {
  console.log(req.params)
  var isThere = false;
    //Finding courses with id
    for(var i = 0; i<courses.length; i++){
        if(courses[i].Id === parseInt(req.params.Id)){
            courses.splice(i,1);
            isThere = true;
        }
    }
    if(isThere){
        res.send("Successfully deleted");
    }else{
        res.send("Something went wrong!");
    }
};