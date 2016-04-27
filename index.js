'use strict';
const encodeVideo = require('./mdl/encodeVideo');

const fetchSovMapList = require('./mdl/fetchSovMapList');
const params = require('./mdl/params');

Promise.resolve()
.then(getParams)
.then(fetchSovMapList)
.then(encodeVideo)
.then(() => console.log('job is done'))
.catch((error) => console.log(error));

//TODO : params : fps; output filename <startdate>_<enddate>; output type; size; etc.. Gestion des params dans un autre module spécialisé

// utilities

function getParams() {
    return params;
}