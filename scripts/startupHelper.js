
module.exports = {
  preventUnwantedDefaultBahaviours
}

function preventUnwantedDefaultBahaviours() {
  // prevent zooming
  var webFrame = require('electron').webFrame;
  webFrame.setVisualZoomLevelLimits(1, 1);
  webFrame.setLayoutZoomLevelLimits(0, 0);
  // prevent drag drop
  document.addEventListener('dragover', event => event.preventDefault());
  document.addEventListener('drop', event => event.preventDefault());
}
