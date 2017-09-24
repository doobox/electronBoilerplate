const electron = require('electron')
const {Menu, app, shell, BrowserWindow, dialog} = electron;

const path = require('path')
const url = require('url')

const defaultMenu = require('electron-default-menu');
const updater = require("./scripts/auto-updater");

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600, zoomFactor:1})

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}


app.on('ready', function () {
  createWindow();
  // Get template for default menu
  const menu = defaultMenu(app, shell);

  // Add custom menu
  menu.splice(4, 0, {
    label: 'Custom',
    submenu: [
      {
        label: 'Check For Updates',
        click: (item, focusedWindow) => {
          updater.init();
        }
      }
    ]
  })

  // Set top-level application menu, using modified template
  Menu.setApplicationMenu(Menu.buildFromTemplate(menu));
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
