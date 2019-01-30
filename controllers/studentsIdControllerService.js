'use strict'
var data = require('./data');
var students = data.students;

module.exports.getStudentById = function getStudentById(req, res, next) {
  var result = "There is no such a student whoes Id is " + req.params.Id
    for(var i = 0; i < students.length; i++){
        if(parseInt(req.params.Id) === students[i].Id){
            result = students[i];
        }
    }
    res.send(result);
};

module.exports.putStudentById = function putStudentById(req, res, next) {
    var isThere = false;
    var isAllowed = true;
    //First checking which students for editing with id
    for(var i = 0; i<students.length; i++){
        if(students[i].Id === parseInt(req.params.Id)){
            isThere = true;
            //Then checking for when editing the id, it supposed not to same with others
            for(var j = 0; j<students.length; j++){
                if(parseInt(req.body.Id) !== parseInt(req.params.Id) && students[j].Id === parseInt(req.body.Id)){
                    res.send("Id already exist, same Id not allowed!");
                    isAllowed = false;
                    break;
                }
            }
            if(isAllowed){
                students[i].Id = parseInt(req.body.Id);
                students[i].Name = req.body.Name;
                students[i].Class = req.body.Class;
                students[i].enrolledCourses = req.body.enrolledCourses;
                students[i].Address = req.body.Address;
                var result = students[i]
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

module.exports.deleteStudentById = function deleteStudentById(req, res, next) {
  var isThere = false;
    //Finding students with id
    for(var i = 0; i<students.length; i++){
        if(students[i].Id === parseInt(req.params.Id)){
            students.splice(i,1);
            isThere = true;
        }
    }
    if(isThere){
        res.send("Successfully deleted");
    }else{
        res.send("Something went wrong!");
    }
};