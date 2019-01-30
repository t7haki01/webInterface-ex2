'use strict'

var data = require('./data');
var students = data.students;

module.exports.getStudents = function getStudents(req, res, next) {
  res.send(students);
};

module.exports.postStudent = function postStudent(req, res, next) {
  var isThere = false;
    //Checking for id, is there already exist or not
    for(var i = 0; i<students.length; i++){
        if(students[i].Id === parseInt(req.body.Id)){
            res.send("Id already exist");
            isThere = true;
            break;
        }
    }
    if(isThere === false){
        students.push(req.body);
        console.log("Successfully students added!");
        res.statusCode = 201        
        console.log(res)
        res.send(students);
    }
};