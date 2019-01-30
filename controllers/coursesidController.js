'use strict'

var varcoursesidController = require('./coursesidControllerService');

module.exports.getCourseById = function getCourseById(req, res, next) {
  varcoursesidController.getCourseById(req, res, next);
};

module.exports.putCourseById = function putCourseById(req, res, next) {
  varcoursesidController.putCourseById(req, res, next);
};

module.exports.deleteCourseById = function deleteCourseById(req, res, next) {
  varcoursesidController.deleteCourseById(req, res, next);
};