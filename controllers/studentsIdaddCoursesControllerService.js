'use strict'
var data = require('./data');
var students = data.students;

module.exports.postCoursesByStudentId = function postCoursesByStudentId(req, res, next) {
  var isThere = false;
    var isEnrolled = false;
    //First finding which student is with id
    for(var i = 0; i<students.length; i++){
        if(students[i].Id === parseInt(req.params.Id)){
            isThere = true;
            //Checking is enrolled already or not
            for(var j = 0; j<students[i].enrolledCourses.length; j++){
                if( students[i].enrolledCourses[j] === parseInt(req.body.Course)){
                    res.send("Course already enrolled!");
                    isEnrolled = true;
                    break;
                }
            }
            if(!isEnrolled){
                students[i].enrolledCourses.push(parseInt(req.body.Course));
                for(var k = 0; k<data.courses.length;k++){
                    if(parseInt(req.body.Course)===data.courses[k].Id){
                        data.courses[k].enrolledStudents.push(parseInt(req.params.Id));
                    }
                }
                var result = students[i];
            }
        }
    }
    if(isThere && !isEnrolled){
        console.log("Successfully Enrolled");
        res.send(result);
    }else{
        res.send("Something went wrong!");
    }
};