'use strict'
var data = require('./data');
var courses = data.courses;

module.exports.getGradesByCourseId = function getGradesByCourseId(req, res, next) {
    console.log(req.params)
    var gathered = [], result =[];
    for(var i = 0; i<data.grades.length; i++){
        if(data.grades[i].Course === parseInt(req.params.Id)){
            gathered.push(data.grades[i]);
        }
    }

    for(var j = 0; j<data.students.length;j++){
        for(var k=0; k<gathered.length; k++){
            if(data.students[j].Id === gathered[k].Student){
                result.push(data.students[j].Name + ": " + gathered[k].Grade);
            }
        }
    }
    res.send(result);
};