var nu = window.navigator.userAgent
/* eslint-disable */
export default {
  isAndroid: nu.indexOf('Android') > -1 || nu.indexOf('Adr') > -1,
  isIos: !!nu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
  isQQ: nu.indexOf('QQ/') > -1,
  isWeixin: nu.toLowerCase().match(/micromessenger/i) == 'micromessenger',
  isWeibo: nu.match(/WeiBo/i) == 'weibo',
  isAndroidApp: (nu.indexOf('Android') > -1 || nu.indexOf('Adr') > -1) && nu.indexOf('MiGuo') > -1,
  isiOSApp: !!nu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && nu.indexOf('MiGuo') > -1,
  iOSAppVersion: nu.match(/([^/]+)$/)[1],
  AndroidAppVersion: nu.match(/([^/]+)$/)[1],
  isMeguoApp: nu.indexOf('MiGuo') > -1
}
