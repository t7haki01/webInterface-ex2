'use strict'

var varcoursesidgradesController = require('./coursesidgradesControllerService');

module.exports.getGradesByCourseId = function getGradesByCourseId(req, res, next) {
  varcoursesidgradesController.getGradesByCourseId(req, res, next);
};