

import { app, shell } from 'electron';
import * as path from 'path';
import * as fs from 'fs';

export class Directory {
  
    static GetUserDataFolder(): string {
        return app.getPath('userData');
    }
    static GetAppDataFolder(): string {
        return app.getPath('appData');
    }
    static GetMyDocumentFolder(): string {
        return app.getPath('documents');
    }
    static GetPictureFolder(): string {
        return app.getPath('pictures');
    }
    /** Get current executable file */
    static GetCurrentFolder(): string {
        return app.getPath('exe');
    }
    /** Get temporary folder */
    static GetTempFolder(): string {
        return app.getPath('temp');
    }
    static GetAppName(): string {
        return app.getName();
    }
    static ShowItemInFolder(value: string): void {        
        shell.showItemInFolder(value);
    }
    static Exist(value: string): boolean {
        try {
            fs.accessSync(value, fs.constants.F_OK);
            return true;
        } catch (e) {
            return false;
        }
    }
    static EnsureFolderExist(value: string): void {
        if (!Directory.Exist(value)) {
            try {
                fs.mkdirSync(value);
            } catch (error) {
                console.log(error);
            }
        }
    }
    static Combine(...paths: string[]): string {
        return path.join(...paths);
    }
}