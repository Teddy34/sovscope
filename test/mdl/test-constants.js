'use strict';
const test = require('tape');
const proxyquire = require('proxyquire');
//const sinon = require('sinon');

test('test constants returns types', (t) => {
    const params = proxyquire('../../mdl/constants', {'moment': () => ({}) });
    t.ok(typeof params === 'object', 'module export is an object');
    t.ok(Object.keys(params).length === 10, 'constants length is ok');
    t.ok(typeof params.EPOCH === 'object', 'EPOCH is an object');
    t.ok(typeof params.TMP_FOLDER === 'string', 'TMP_FOLDER is an string');
    t.ok(typeof params.CACHE_FOLDER === 'string', 'CACHE_FOLDER is an string');
    t.ok(typeof params.OUTPUT_FOLDER === 'string', 'OUTPUT_FOLDER is an string');
    t.ok(typeof params.DEFAULT_INPUT_FILE_EXTENSION === 'string', 'DEFAULT_INPUT_FILE_EXTENSION is an string');
    t.ok(typeof params.DEFAULT_URL_PREFIX === 'string', 'DEFAULT_URL_PREFIX is an string');
    t.ok(typeof params.DEFAULT_DATE_FORMAT === 'string', 'DEFAULT_DATE_FORMAT is an string');
    t.ok(typeof params.DEFAULT_FRAMERATE === 'number', 'DEFAULT_FRAMERATE is a number');
    t.ok(typeof params.DEFAULT_OUTPUT_EXTENSION === 'string', 'DEFAULT_OUTPUT_EXTENSION is an string');
    t.ok(typeof params.DEFAULT_OUTPUT_FILENAME === 'string', 'DEFAULT_OUTPUT_FILENAME is an string');
    t.end();
});
