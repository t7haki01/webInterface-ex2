'use strict'
var data = require('./data');
var courses = data.courses;

module.exports.postStudentsToCourse = function postStudentsToCourse(req, res, next) {
    console.log(req.params)
    var isThere = false;
    var isEnrolled = false;
    //First finding which course is with id
    for(var i = 0; i<courses.length; i++){
        if(courses[i].Id === parseInt(req.params.Id)){
            isThere = true;
            //Checking is enrolled already or not
            for(var j = 0; j<courses[i].enrolledStudents.length; j++){
                if( courses[i].enrolledStudents[j] === parseInt(req.body.Student)){
                    res.send("Student already enrolled!");
                    isEnrolled = true;
                    break;
                }
            }
            if(!isEnrolled){
                courses[i].enrolledStudents.push(parseInt(req.body.Student));
                for(var k = 0; k<data.students.length;k++){
                    if(parseInt(req.body.Student)===data.students[k].Id){
                        data.students[k].enrolledCourses.push(parseInt(req.params.Id));
                    }
                }
                var result = courses[i];
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