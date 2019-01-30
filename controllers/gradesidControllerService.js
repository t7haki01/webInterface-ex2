'use strict'
var data = require('./data');
var grades = data.grades;

module.exports.getGradesById = function getGradesById(req, res, next) {
    console.log(req.params)

    var result = "There is no such a grade which " + req.params.id + " is id"
    
    for(var i = 0; i < grades.length; i++){
        if(parseInt(req.params.id) === grades[i].Id){
            result = grades[i];
        }
    }
    res.send(result);
};

module.exports.putGradeById = function putGradeById(req, res, next) {
  console.log(req.params)
  var isThere = false;
    var isAllowed = true;
    //First checking which grades for editing with id
    for(var i = 0; i<grades.length; i++){
        if(grades[i].Id === parseInt(req.params.id)){
            isThere = true;
            //Then checking for when editing the id, it supposed not to same with others
            for(var j = 0; j<grades.length; j++){
                if(parseInt(req.body.Id) !== parseInt(req.params.id) && grades[j].Id === parseInt(req.body.Id)){
                    res.send("Id already exist, same Id not allowed!");
                    isAllowed = false;
                    break;
                }
            }
            if(isAllowed){
                grades[i].Id = parseInt(req.body.Id);
                grades[i].Course = req.body.Course;
                grades[i].Student = req.body.Student;
                grades[i].Grade = req.body.Grade;
                var result = grades[i]
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

module.exports.deleteGradeById = function deleteGradeById(req, res, next) {
  console.log(req.params)
  var isThere = false;
    //Finding grades with id
    for(var i = 0; i<grades.length; i++){
        if(grades[i].Id === parseInt(req.params.id)){
            grades.splice(i,1);
            isThere = true;
        }
    }
    if(isThere){
        res.send("Successfully deleted");
    }else{
        res.send("Something went wrong!");
    }
};