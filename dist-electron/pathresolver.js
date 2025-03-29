import { app } from "electron";
import path from "path";
// import { isDev } from "./utils.js";
const gobalAppPath = app.getAppPath();
export function getPreLoadPath() {
    return path.join(gobalAppPath, '/dist-electron/preload.mjs');
}
export function getUserInterfacePath() {
    return path.join(gobalAppPath, '/dist-react/index.html');
}
