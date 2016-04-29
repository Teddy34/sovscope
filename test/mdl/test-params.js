'use strict';
const test = require('tape');
const proxyquire = require('proxyquire');
const moment = require('moment');
//const sinon = require('sinon');

/*
const userParam = require('../param.json');
const CONSTANTS = require('./constants');

    startDate: moment.max(CONSTANTS.EPOCH, moment.min(moment(), moment(userParam.startDate))),
    endDate: moment.max(CONSTANTS.EPOCH, moment.min(moment(), moment(userParam.endDate))),
    urlPrefix: userParam.urlPrefix || CONSTANTS.DEFAULT_URL_PREFIX,
    inputFileExtension: userParam.imgExtension || CONSTANTS.DEFAULT_INPUT_FILE_EXTENSION,
    dateFormat: userParam.dateFormat || CONSTANTS.DEFAULT_DATE_FORMAT,
    tmpfilePadding: userParam.tmpfilePadding || CONSTANTS.DEFAULT_TMP_FILE_PADDING
*/

/*const constantsStub = {
    EPOCH: moment('20160101'),
    DEFAULT_URL_PREFIX:'DEFAULT_URL_PREFIX',
    DEFAULT_INPUT_FILE_EXTENSION:'DEFAULT_INPUT_FILE_EXTENSION',
    DEFAULT_DATE_FORMAT:'DEFAULT_DATE_FORMAT',
    DEFAULT_TMP_FILE_PADDING:5
};*/

test('test constants returns types', (t) => {

    const paramFileStub = {
        startDate: '20160202',
        endDate: '20160210',
        urlPrefix: 'urlPrefix',
        inputFileExtension: 'inputFileExtension',
        dateFormat: 'dateFormat',
        framerate: 3,
        outputExtension: 'outputExtension'
    };

    const params = proxyquire('../../mdl/params', {
        '../../param.json':paramFileStub
    });

    t.equal(typeof params, 'object', 'module is an object');
    t.equal(typeof params.startDate, 'object', 'startDate is an object');
    t.equal(typeof params.endDate, 'object', 'endDate is an object');
    t.equal(typeof params.urlPrefix, 'string', 'urlPrefix is an string');
    t.equal(typeof params.inputFileExtension, 'string', 'inputFileExtension is an string');
    t.equal(typeof params.dateFormat, 'string', 'dateFormat is an string');
    t.equal(typeof params.framerate, 'number', 'framerate is an string');
    t.equal(typeof params.outputExtension, 'string', 'outputExtension is an string');
    t.equal(typeof params.outputFilename, 'string', 'outputFilename is an string');
    t.equal(Object.keys(params).length, 8, 'params length is ok');

    t.end();
});
