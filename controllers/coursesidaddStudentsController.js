'use strict'

var varcoursesidaddStudentsController = require('./coursesidaddStudentsControllerService');

module.exports.postStudentsToCourse = function postStudentsToCourse(req, res, next) {
  varcoursesidaddStudentsController.postStudentsToCourse(req, res, next);
};