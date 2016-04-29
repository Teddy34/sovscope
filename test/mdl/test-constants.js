'use strict';
const test = require('tape');
const proxyquire = require('proxyquire');
//const sinon = require('sinon');

test('test constants returns types', (t) => {
    const params = proxyquire('../../mdl/constants', {'moment': () => ({}) });
    t.equal(typeof params, 'object', 'module export is an object');
    t.equal(Object.keys(params).length, 11, 'constants length is ok');
    t.equal(typeof params.EPOCH, 'object', 'EPOCH is an object');
    t.equal(typeof params.TMP_FOLDER, 'string', 'TMP_FOLDER is an string');
    t.equal(typeof params.CACHE_FOLDER, 'string', 'CACHE_FOLDER is an string');
    t.equal(typeof params.OUTPUT_FOLDER, 'string', 'OUTPUT_FOLDER is an string');
    t.equal(typeof params.DEFAULT_INPUT_FILE_EXTENSION, 'string', 'DEFAULT_INPUT_FILE_EXTENSION is an string');
    t.equal(typeof params.DEFAULT_URL_PREFIX, 'string', 'DEFAULT_URL_PREFIX is an string');
    t.equal(typeof params.DEFAULT_DATE_FORMAT, 'string', 'DEFAULT_DATE_FORMAT is an string');
    t.equal(typeof params.DEFAULT_FRAMERATE, 'number', 'DEFAULT_FRAMERATE is a number');
    t.equal(typeof params.DEFAULT_RESOLUTION, 'string', 'DEFAULT_RESOLUTION is an string');
    t.equal(typeof params.DEFAULT_OUTPUT_EXTENSION, 'string', 'DEFAULT_OUTPUT_EXTENSION is an string');
    t.equal(typeof params.DEFAULT_OUTPUT_FILENAME, 'string', 'DEFAULT_OUTPUT_FILENAME is an string');
    t.end();
});
