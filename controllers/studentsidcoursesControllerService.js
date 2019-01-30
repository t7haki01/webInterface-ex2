'use strict'
var data = require('./data');
var students = data.students;

module.exports.getEnrolledCourses = function getEnrolledCourses(req, res, next) {
  var isThere = false, isEnrolled = false;
    var result = "There seems like nothing have enrolled or student is not exist";
    //First checking which students with id
    for(var i = 0; i<students.length; i++){
        if(students[i].Id === parseInt(req.params.id)){
            isThere = true;
            var enrolledCourses = [];
            for(var j = 0; j<data.courses.length; j++){
                if(data.courses[j].enrolledStudents.indexOf(parseInt(req.params.id)) !== -1){
                    enrolledCourses.push(data.courses[j].Name);
                    isEnrolled = true;
                }
            }
        }
    }
    if(isThere && isEnrolled){
        console.log("Successfully found");
        result = "Enrolled courses are " + enrolledCourses;
        res.send(result);
    }else{
        res.send(result);
    }
};