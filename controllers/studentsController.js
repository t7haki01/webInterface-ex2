'use strict'

var varstudentsController = require('./studentsControllerService');

module.exports.getStudents = function getStudents(req, res, next) {
  varstudentsController.getStudents(req.swagger.params, res, next);
};

module.exports.postStudent = function postStudent(req, res, next) {
  varstudentsController.postStudent(req, res, next);
};