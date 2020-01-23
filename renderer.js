// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// The Node.js APIs are available in this process because
// `nodeIntegration` is turned on. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const electron = require('electron');
const remote = require('electron').remote;
const currentWindow = electron.remote.getCurrentWindow();

window.MPOP_MODE = currentWindow.MPOP_MODE;

// const setWindowFullscreen = (value) => {
//   currentWindow.setFullScreen(value);
// };
// 
// currentWindow.once('did-finish-load', () => {
//   setWindowFullScreen(true);
// });
// 
// 
// document.addEventListener('DOMContentLoaded', () => {
//   setWindowFullScreen(true);
// });

