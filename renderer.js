// REQUIRES
const electron = require('electron').remote;
const app = electron.app;
const jetpack = require('fs-jetpack');
const ls = require('local-storage');
const funky = require("./scripts/funky");
const startupHelper = require("./scripts/startupHelper");

// HELPERS
startupHelper.preventUnwantedDefaultBahaviours();

// DOCUMENT READY CODE
$( document ).ready(function() {

}); // end doc ready
