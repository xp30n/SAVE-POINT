const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 700,
        frame: false
    })

    win.loadFile('index.html')
    win.setAlwaysOnTop(true);
}

app.whenReady().then(createWindow);