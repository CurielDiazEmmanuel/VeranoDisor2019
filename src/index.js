const { app, BrowserWindow, Menu } = require('electron');
const url = require('url');
const path = require('path');

let mainWindow
let createTests
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 900
  });
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'view/index.html'),
    protocol: 'file',
    slashes: true
  }))
  const mainMenu = Menu.buildFromTemplate(templateMenu);
  Menu.setApplicationMenu(mainMenu);
});

function createTest() {
  createTests = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'test'
  });
  createTests.loadURL(url.format({
    pathname: path.join(__dirname, 'view/test.html'),
    protocol: 'file',
    slashes: true
  }))

}

const templateMenu = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Test',
        accelerator: 'Ctrl+N',
        click() {
          createTest();
        }
      }
    ]
  }
]