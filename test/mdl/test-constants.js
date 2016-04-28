'use strict';
const test = require('tape');
const proxyquire = require('proxyquire');
//const sinon = require('sinon');

test('test constants returns types', (t) => {
    const params = proxyquire('../../mdl/constants', {'moment': () => ({}) });
    t.ok(typeof params === 'object', 'module export is an object');
    t.ok(Object.keys(params).length === 8, 'constants length is ok');
    t.ok(typeof params.EPOCH === 'object', 'EPOCH is an object');
    t.ok(typeof params.TMP_FOLDER === 'string', 'TMP_FOLDER is an object');
    t.ok(typeof params.CACHE_FOLDER === 'string', 'CACHE_FOLDER is an object');
    t.ok(typeof params.OUTPUT_FOLDER === 'string', 'OUTPUT_FOLDER is an object');
    t.ok(typeof params.DEFAULT_INPUT_FILE_EXTENSION === 'string', 'DEFAULT_INPUT_FILE_EXTENSION is an object');
    t.ok(typeof params.DEFAULT_URL_PREFIX === 'string', 'DEFAULT_URL_PREFIX is an object');
    t.ok(typeof params.DEFAULT_DATE_FORMAT === 'string', 'DEFAULT_DATE_FORMAT is an object');
    t.ok(typeof params.DEFAULT_TMP_FILE_PADDING === 'number', 'DEFAULT_TMP_FILE_PADDING is an object');
    t.end();
});
