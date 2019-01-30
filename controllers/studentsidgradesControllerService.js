'use strict'
var data = require('./data');
var students = data.students;

module.exports.getGradesByStudentId = function getGradesByStudentId(req, res, next) {
  var gathered = [], result =[];
    for(var i = 0; i<data.grades.length; i++){
        if(data.grades[i].Student === parseInt(req.params.Id)){
            gathered.push(data.grades[i]);
        }
    }

    for(var j = 0; j<data.courses.length;j++){
        for(var k=0; k<gathered.length; k++){
            if(data.courses[j].Id === gathered[k].Course){
                result.push(data.courses[j].Name + ": " + gathered[k].Grade);
            }
        }
    }
    res.send(result);
};