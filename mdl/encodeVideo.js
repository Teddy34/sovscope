'use strict';
const fs = require('fs-extra');
const _ = require('lodash');
const ffmpeg = require('fluent-ffmpeg');

const CONSTANTS = require('./constants');
const params = require('./params');

function checkOrCreateOutputDirectory() {
    let deferred = Promise.defer();
    fs.mkdir(CONSTANTS.OUTPUT_FOLDER, () => deferred.resolve());
    return deferred.promise;
}

function encodeVideo() {
    let deferred = Promise.defer();
    let video = ffmpeg()
    .addInput(CONSTANTS.TMP_FOLDER+'/%08d.png')
    .inputFps(params.framerate)
    .output('./output/' + params.outputFilename + '.' + params.outputExtension)
    .on('end', () => deferred.resolve())
    .on('error', (err) => deferred.reject(err));

    if (params.resolution) {
        video = video.size(params.resolution);
    }

    video.run();
    return deferred.promise;
}

function *seqFilenameGenerator() {
    var index = 1;
    for (;;) {
        yield _.padStart(index, 8, '0')+'.png';
        index++;
    }
}

function copyAndRenameList(filenameList) {
    const newFilenameIterator = new seqFilenameGenerator(filenameList.length);
    _.forEach(filenameList, (value) => {
        var newFilename = newFilenameIterator.next().value;
        fs.copy(CONSTANTS.CACHE_FOLDER+'/'+value, CONSTANTS.TMP_FOLDER+'/'+newFilename, function (err) {
            if (err) return console.error(err);
        });
    });
    return filenameList.length;
}

function deleteTmp() {
    let deferred = Promise.defer();
    fs.remove(CONSTANTS.TMP_FOLDER, function (err) {
        if (err) {
            deferred.reject(err);
        }
        console.log('cleaning...');
        deferred.resolve();
    });
    return deferred.promise;
}

module.exports = function(filenameList) {
    return Promise.resolve()
    .then(() => console.log('gathering sovmaps for encoding'))
    .then(checkOrCreateOutputDirectory)
    .then(() => filenameList)
    .then(copyAndRenameList)
    .then((sampleSize) => {if (!sampleSize) throw new Error('no sovmaps for that time period!!!'); return sampleSize;})
    .then(() => console.log('encoding video...'))
    .then(encodeVideo)
    .then(() => console.log('encoding done!'))
    .then(deleteTmp);
};