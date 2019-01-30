'use strict'

var varstudentsIdController = require('./studentsIdControllerService');

module.exports.getStudentById = function getStudentById(req, res, next) {
  varstudentsIdController.getStudentById(req, res, next);
};

module.exports.putStudentById = function putStudentById(req, res, next) {
  varstudentsIdController.putStudentById(req, res, next);
};

module.exports.deleteStudentById = function deleteStudentById(req, res, next) {
  varstudentsIdController.deleteStudentById(req, res, next);
};