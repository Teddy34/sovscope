'use strict';
const test = require('tape');
//const proxyquire = require('proxyquire');

//dependency list:
/*
{
    'fs-extra': () => ({}),
    'lodash': () => ({})
    'fluent-ffmpeg': () => ({})
    './constants': () => ({})
    './params': () => ({})
    }
*/


test('test encodeVideo returns type', (t) => {
    const encodeVideo = require('../../mdl/encodeVideo');
    t.equal(typeof encodeVideo, 'function', 'module export is an function');
    t.end();
});
