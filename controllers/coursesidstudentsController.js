'use strict'

var varcoursesidstudentsController = require('./coursesidstudentsControllerService');

module.exports.getStudentsByCourseId = function getStudentsByCourseId(req, res, next) {
  varcoursesidstudentsController.getStudentsByCourseId(req, res, next);
};