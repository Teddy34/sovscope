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

const constantsStub = {
    EPOCH: moment('20160101'),
    DEFAULT_URL_PREFIX:'DEFAULT_URL_PREFIX',
    DEFAULT_INPUT_FILE_EXTENSION:'DEFAULT_INPUT_FILE_EXTENSION',
    DEFAULT_DATE_FORMAT:'DEFAULT_DATE_FORMAT',
    DEFAULT_TMP_FILE_PADDING:5
};

test('test constants returns types', (t) => {

    const paramFileStub = {
        startDate: '20160202',
        endDate: '20160210',
        urlPrefix: 'urlPrefix',
        inputFileExtension: 'inputFileExtension',
        dateFormat: 'dateFormat',
        tmpfilePadding: 'tmpfilePadding'
    };

    const params = proxyquire('../../mdl/params', {
        '../../param.json':paramFileStub
    });

    t.ok(typeof params === 'object', 'module is an object');
    t.ok(typeof params.startDate === 'object', 'startDate is an object');
    t.ok(typeof params.endDate === 'object', 'endDate is an object');
    t.ok(typeof params.urlPrefix === 'string', 'urlPrefix is an string');
    t.ok(typeof params.inputFileExtension === 'string', 'inputFileExtension is an string');
    t.ok(typeof params.dateFormat === 'string', 'dateFormat is an string');
    t.ok(typeof params.tmpfilePadding === 'number', 'tmpfilePadding is an string');
    t.ok(Object.keys(params).length === 6, 'params length is ok');

    t.end();
});
