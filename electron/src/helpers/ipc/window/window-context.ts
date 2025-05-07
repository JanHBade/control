import { Fullscreen } from "lucide-react";
import {
  WIN_MINIMIZE_CHANNEL,
  WIN_MAXIMIZE_CHANNEL,
  WIN_CLOSE_CHANNEL,
  WIN_FULLSCREEN_CHANNEL,
} from "./window-channels";

export function exposeWindowContext() {
  const { contextBridge, ipcRenderer } = window.require("electron");
  contextBridge.exposeInMainWorld("electronWindow", {
    minimize: () => ipcRenderer.invoke(WIN_MINIMIZE_CHANNEL),
    maximize: () => ipcRenderer.invoke(WIN_MAXIMIZE_CHANNEL),
    fullscreen: (value: boolean) =>
      ipcRenderer.invoke(WIN_FULLSCREEN_CHANNEL, value),
    close: () => ipcRenderer.invoke(WIN_CLOSE_CHANNEL),
  });
}
