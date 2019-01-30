'use strict'
var data = require('./data');
var grades = data.grades;


module.exports.getGradesAll = function getGradesAll(req, res, next) {
  res.send(grades);
};

module.exports.postGrades = function postGrades(req, res, next) {
    var isThere = false;
    var isGraded = false;
    //Checking for id, is there already exist or not
    for(var i = 0; i<grades.length; i++){
        if(grades[i].Id === parseInt(req.body.Id)){
            res.send("Id already exist");
            isThere = true;
            break;
        }
        if(grades[i].Course === parseInt(req.body.Course) && grades[i].Student === parseInt(req.body.Student)){
            res.send("Already graded");
            isGraded = true;
            break;
        }
    }
    if(!isThere&& !isGraded){
        grades.push(req.body);
        console.log("Successfully graded!");
        res.send(grades);
    }
};