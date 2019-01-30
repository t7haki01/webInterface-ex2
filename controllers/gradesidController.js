'use strict'

var vargradesidController = require('./gradesidControllerService');

module.exports.getGradesById = function getGradesById(req, res, next) {
  vargradesidController.getGradesById(req, res, next);
};

module.exports.putGradeById = function putGradeById(req, res, next) {
  vargradesidController.putGradeById(req, res, next);
};

module.exports.deleteGradeById = function deleteGradeById(req, res, next) {
  vargradesidController.deleteGradeById(req, res, next);
};