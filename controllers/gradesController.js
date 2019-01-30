'use strict'

var vargradesController = require('./gradesControllerService');

module.exports.getGradesAll = function getGradesAll(req, res, next) {
  vargradesController.getGradesAll(req, res, next);
};

module.exports.postGrades = function postGrades(req, res, next) {
  vargradesController.postGrades(req, res, next);
};