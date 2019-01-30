'use strict'
var data = require('./data');
var courses = data.courses;

module.exports.getCourseAll = function getCourseAll(req, res, next) {
  res.send(courses);
};

module.exports.postCourse = function postCourse(req, res, next) {
  var isThere = false;
    //Checking for id, is there already exist or not
    for(var i = 0; i<courses.length; i++){
        if(courses[i].Id === parseInt(req.body.Id)){
            res.send("Id already exist");
            isThere = true;
            break;
        }
    }
    if(isThere === false){
        courses.push(req.body);
        console.log("Successfully courses added!");
        res.send(courses);
    }
};