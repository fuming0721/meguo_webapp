import deviceType from './device'
const setupWebViewJavascriptBridge = (callback) => {
  if (deviceType.isiOSApp) {
    if (window.WebViewJavascriptBridge) {
      return callback(window.WebViewJavascriptBridge)
    }
    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback)
    }
    window.WVJBCallbacks = [callback]
    let WVJBIframe = document.createElement('iframe')
    WVJBIframe.style.display = 'none'
    WVJBIframe.src = 'https://__bridge_loaded__'
    document.documentElement.appendChild(WVJBIframe)
    setTimeout(() => {
      document.documentElement.removeChild(WVJBIframe)
    }, 0)
  } else if (deviceType.isAndroidApp) {
    if (window.WebViewJavascriptBridge) {
      callback(window.WebViewJavascriptBridge)
    } else {
      document.addEventListener(
        'WebViewJavascriptBridgeReady'
        , () => {
          callback(window.WebViewJavascriptBridge)
        },
        false
      )
    }
  }
}

export default {
  callhandler (name, data, callback) {
    setupWebViewJavascriptBridge((bridge) => {
      bridge.callHandler(name, data, callback)
    })
  },
  registerhandler (name, callback) {
    setupWebViewJavascriptBridge((bridge) => {
      bridge.registerHandler(name, (data, responseCallback) => {
        callback(data, responseCallback)
      })
    })
  }
}
