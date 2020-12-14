Page({
  onTapJump: function (event) {
    wx.switchTab({
      url: "../e1/e1",
      success: function () {
        console.log("jump success")
      },
      fail: function () {
        console.log("jump failed")
      },
      complete: function () {
        console.log("jump complete")
      }
    });
  },
  onUnload: function (event) {
    console.log("page is unload")
  },
  onHide: function (event) {
    console.log("page is hide")
  },
})