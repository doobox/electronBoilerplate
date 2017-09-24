const {autoUpdater,dialog} = require("electron");
//const {autoUpdater,dialog} = require("electron").remote;
const axios = require('axios');
const semver = require('semver');
const version = require('../package.json').version;


const updateurl = "https://www.doobox.co.uk/sharing/appupdates/boilerplate/mac.json"

module.exports = {
  init
}

function init() {
  console.log("about to check for updates");
  console.log("just a test version : " + version);
  logEvents();
  autoUpdater.setFeedURL(updateurl);
  checkForUpdates();
}


function checkForUpdates() {
  axios.get(updateurl)
  .then(function (response) {
    if (response.status === 200 && semver.gt(response.data.version, version)){
      dialog.showMessageBox({
        "type": "info",
        "message": `Update available, version ${response.data.version}`,
        "buttons": ["Download","Close"],
        "defaultId": 0
      },(clickedIndex) => {
        if (clickedIndex === 0){
          autoUpdater.checkForUpdates();
        }
      });
    }else {
      dialog.showMessageBox({
        "type": "info",
        "title": "Auto Updater",
        "message": `You have the latest version ${version} installed.`,
        "buttons": ["OK"],
        "defaultId": 0
      });
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}



function logEvents() {
  autoUpdater.on("checking-for-update", () => {
    console.log("checking-for-update");
  });


  autoUpdater.on("update-available", () => {
    console.log("update-available");
  });


  autoUpdater.on("update-not-available", () => {
    console.log("update-not-available");
  });


  autoUpdater.on("update-downloaded", () => {
    console.log("update-downloaded");
    prompUpdate();
  });


  autoUpdater.on("error", (e) => {
    console.log(e);
  });
}

function prompUpdate() {
  dialog.showMessageBox({
    "type": "info",
    "message": "Update downloaded and ready to install.",
    "buttons": ["Install","Close"],
    "defaultId": 0
  },(clickedIndex) => {
    if (clickedIndex === 0){
      autoUpdater.quitAndInstall();
    }
  });
};
