'use strict'

var varcoursesController = require('./coursesControllerService');

module.exports.getCourseAll = function getCourseAll(req, res, next) {
  varcoursesController.getCourseAll(req.swagger.params, res, next);
};

module.exports.postCourse = function postCourse(req, res, next) {
  varcoursesController.postCourse(req, res, next);
};