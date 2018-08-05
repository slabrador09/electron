'use strict'

const binding = process.atomBinding('ipc')
const v8Util = process.atomBinding('v8_util')

// Created by init.js.
const ipcRenderer = v8Util.getHiddenValue(global, 'ipc-internal')

ipcRenderer.send = function (...args) {
  return binding.send('ipc-internal-message', args)
}

ipcRenderer.sendSync = function (...args) {
  return binding.sendSync('ipc-internal-message-sync', args)[0]
}

ipcRenderer.sendTo = function (webContentsId, channel, ...args) {
  return binding.sendTo(true, false, webContentsId, channel, args)
}

ipcRenderer.sendToAll = function (webContentsId, channel, ...args) {
  return binding.sendTo(true, true, webContentsId, channel, args)
}

module.exports = ipcRenderer
