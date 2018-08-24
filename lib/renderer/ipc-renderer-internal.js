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
  const internal = true
  const sendToAll = false

  return binding.sendTo(internal, sendToAll, webContentsId, channel, args)
}

ipcRenderer.sendToAll = function (webContentsId, channel, ...args) {
  const internal = true
  const sendToAll = true

  return binding.sendTo(internal, sendToAll, webContentsId, channel, args)
}

module.exports = ipcRenderer
