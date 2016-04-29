'use strict';
const moment = require('moment');
const Download = require('download');
const fs = require('fs-extra');
const CONSTANTS = require('./constants');
const params = require('./params');

function fetchSovMapList(config) {
    console.log('updating cache');
    let promise = Promise.resolve();
    let gen = new crawlDate(config.startDate, config.endDate);
    let successfullyFechedFilenameList = [];

    for (let nextDate of gen) {
        const filename = nextDate.format(params.dateFormat) + '.' + params.inputFileExtension;
        // we want to do this synchronously to avoid downloading too much at the same time
        promise = promise
        .then(() => getSovMap(filename))
        .then(() => successfullyFechedFilenameList.push(filename))
        .catch(() => true);
    }
    return promise
    .then(() => console.log('all available sovmaps fetched!!!'))
    .then(() => successfullyFechedFilenameList);
}

function *crawlDate(startDate, endDate) {

    //cloning and protecting from void values: ES6 default parameter not supporterd in node (use babel)
    let iteratorDate = moment(startDate) ;
    endDate = endDate? moment(endDate) : moment(startDate);

    // invert if not correct : ES6 destructuring assignement not supporterd in node (use babel)
    if (iteratorDate.isAfter(endDate)) {
        let temp = iteratorDate;
        iteratorDate = endDate;
        endDate = temp;
    }

    while(!iteratorDate.isAfter(endDate)) {
      // clone return value to protect it
        yield(moment(iteratorDate));
        iteratorDate.add(1,'d');
    }
}

function testFileAlreadyFetched(filename) {
    let deferred = Promise.defer();
    fs.access(CONSTANTS.CACHE_FOLDER+'/'+filename, fs.R_OK | fs.W_OK, (err) => {
        deferred.resolve(!err);
    });
    return deferred.promise;
}

function getSovMap(filename) {
    return Promise.resolve(filename)
    .then(testFileAlreadyFetched)
    .then(function(bAlreadyPresent) {
        if (!bAlreadyPresent) {
            console.log(filename+ ' needs to be downloaded');
        }
        return bAlreadyPresent? true:download(constructUrl(filename));
    });
}

function constructUrl(filename){
    return params.urlPrefix + filename;
}

function download(url) {
    let deferred = Promise.defer();
    new Download()
    .dest(CONSTANTS.CACHE_FOLDER)
    .get(url)
    .run(function(err){
        console.log(err? err.message: url + ' fetched');
        deferred[err?'reject':'resolve'](err);
    });
    return deferred.promise;
}

module.exports = fetchSovMapList;