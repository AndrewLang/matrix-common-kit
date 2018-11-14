import * as os from 'os';
import * as glob from 'glob';
import * as path from 'path';
import { BrowserWindow } from 'electron';

export function isMac() {
    return process.mas || os.platform() === 'darwin';
}

export function isLinux() {
    return os.platform() === 'linux';
}
export function isWindows() {
    return os.platform() === 'win32';
}
export function loadModules(folder: string) {
    try {
        let dir = path.join(folder, '*.js');
        let files = glob.sync(dir);
        files.forEach(function (file) {
            require(file);
        });
    } catch (error) {
        console.log(error);
    }
}

export function getMainWindow(): BrowserWindow {
    return BrowserWindow.getAllWindows()[0];
}