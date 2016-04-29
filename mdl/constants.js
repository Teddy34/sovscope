'use strict';
const moment = require('moment');

module.exports = {
    EPOCH: moment('20100213'), // first sov map ever created
    TMP_FOLDER: './cache/tmp',
    CACHE_FOLDER: './cache/download',
    OUTPUT_FOLDER: './output',
    DEFAULT_INPUT_FILE_EXTENSION: 'png',
    DEFAULT_URL_PREFIX: 'http://go-dl1.eve-files.com/media/corp/verite/',
    DEFAULT_DATE_FORMAT: 'YYYYMMDD',
    DEFAULT_FRAMERATE: 3,
    DEFAULT_OUTPUT_EXTENSION: 'avi',
    DEFAULT_OUTPUT_FILENAME: 'video'
};