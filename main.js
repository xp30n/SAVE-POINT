const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('index.html')
    win.setAlwaysOnTop(true);
}

app.whenReady().then(createWindow);