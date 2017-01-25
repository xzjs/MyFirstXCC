// pages/publish/create.js
Page({
  data: {
    img1: "",
    img2: "",
    img3: ""
  },
  selectImg: function (event) {
    //console.log(event.target.id);
    var id = event.target.id;
    var self = this;
    wx.chooseImage({
      count: 1, // 默认9
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        self.setData({
          [id]: tempFilePaths[0],
        });
      }
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})