'use strict';
const moment = require('moment');
const userParam = require('../param.json');
const CONSTANTS = require('./constants');

const params = {
    startDate: moment.max(CONSTANTS.EPOCH, moment.min(moment(), moment(userParam.startDate))),
    endDate: moment.max(CONSTANTS.EPOCH, moment.min(moment(), moment(userParam.endDate))),
    urlPrefix: userParam.urlPrefix || CONSTANTS.DEFAULT_URL_PREFIX,
    inputFileExtension: userParam.imgExtension || CONSTANTS.DEFAULT_INPUT_FILE_EXTENSION,
    dateFormat: userParam.dateFormat || CONSTANTS.DEFAULT_DATE_FORMAT,
    framerate: userParam.framerate || CONSTANTS.DEFAULT_FRAMERATE,
    resolution: userParam.resolution || CONSTANTS.DEFAULT_RESOLUTION,
    outputExtension: userParam.outputExtension || CONSTANTS.DEFAULT_OUTPUT_EXTENSION,
    outputFilename: userParam.outputFilename || CONSTANTS.DEFAULT_OUTPUT_FILENAME
};

if (params.endDate.isBefore(params.startDate)) {
    throw new Error('start date is after end date');
}

module.exports = params;