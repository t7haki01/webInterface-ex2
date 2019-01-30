'use strict'

var varstudentsidcoursesController = require('./studentsidcoursesControllerService');

module.exports.getEnrolledCourses = function getEnrolledCourses(req, res, next) {
  varstudentsidcoursesController.getEnrolledCourses(req, res, next);
};