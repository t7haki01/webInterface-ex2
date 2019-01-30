'use strict'
var data = require('./data');
var courses = data.courses;

module.exports.getStudentsByCourseId = function getStudentsByCourseId(req, res, next) {
    console.log(req.params)
    var isThere = false;
    var result = "There seems like nobody has been enrolled or course is not exist";
    //First checking course with id
    for(var i = 0; i<courses.length; i++){
        if(courses[i].Id === parseInt(req.params.Id)){
            isThere = true;
            var enrolledStudents = [];
            for(var j = 0; j<data.students.length; j++){
                if(data.students[j].enrolledCourses.indexOf(parseInt(req.params.Id)) !== -1){
                    enrolledStudents.push(data.students[j].Name);
                }
            }
        }
    }
    if(isThere){
        console.log("Successfully found");
        result = "Enrolled students are " + enrolledStudents;
        res.send(result);
    }else{
        res.send(result);
    }
};