'use strict'

var varstudentsIdaddCoursesController = require('./studentsIdaddCoursesControllerService');

module.exports.postCoursesByStudentId = function postCoursesByStudentId(req, res, next) {
  varstudentsIdaddCoursesController.postCoursesByStudentId(req, res, next);
};