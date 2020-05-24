//app.js
var utils = require('/utils/util.js');

App({
  onLaunch: function () {
    wx.cloud.init();
    utils.checkSessionTimeout();
  },
  onShow: function () {
    // console.log('App onShow1' + this.NAME);
  },
  onHide: function () {
    // console.log('App onHide');
  },
  onError: function () {
    console.log('App onError');
  },
  URL: 'http://127.0.0.1',
  NAME: '俊杰实业'
})