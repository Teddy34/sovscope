'use strict';
const test = require('tape');
//const proxyquire = require('proxyquire');

//dependency list:
/*
{
    'moment': () => ({}),
    'download': () => ({})
    'fluent-ffmpeg': () => ({})
    'fs-extra': () => ({})
    './params': () => ({})
    }

*/

test('test encodeVideo returns type', (t) => {
    const fetchSovMapList = require('../../mdl/fetchSovMapList');
    t.ok(typeof fetchSovMapList === 'function', 'module export is an function');
    t.end();
});
