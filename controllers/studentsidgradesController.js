'use strict'
var varstudentsidgradesController = require('./studentsidgradesControllerService');

module.exports.getGradesByStudentId = function getGradesByStudentId(req, res, next) {
  varstudentsidgradesController.getGradesByStudentId(req, res, next);
};