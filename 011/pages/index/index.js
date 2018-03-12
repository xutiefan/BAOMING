//index.js
//获取应用实例
const app = getApp();
var common = require("../../utils/common.js");
Page({
  data: {
    motto: 'Hello World',
    text: 'test text',
    condition: false,
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    item: {
      index: 0,
      msg1: 'this is a template',
      msg2: '!!',
      time: '2016-09-15'
    },
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ],
    numberArray: [1, 2, 3, 4],    
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  handleTap1: function(event){
    console.log("outerTab1");
    console.log(event);

  },
  handleTap2: function (event) {
    console.log("outerTab2");

  },
  handleTap3: function (event) {
    console.log("outerTab3");

  },   

  onReady: function () {
    // Do something when page ready.
    console.log("index page execute: onReady."); 
  },
  onShow: function () {
    // Do something when page show.
    common.setUserName("Xu Zhe Fan!");
    this.setData({
      text:'XZF test!'
    })
  },
  onHide: function () {
    // Do something when page hide.
  },
  onUnload: function () {
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
    console.log("index page execute: onPullDownRefresh."); 
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
    console.log("index page execute: onReachBottom."); 
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onPageScroll: function () {
    // Do something when page scroll
    console.log("index page execute: onPageScroll."); 
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // Event handler.
  viewTap: function () {
    this.setData({
      text: 'Set some data for updating view.'
    }, function () {
      // this is setData callback
    })
  },
  customData: {
    hi: 'MINA'
  }
})
