// pages/zhufu/zhufu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu: ['婚庆', '乔迁', '满月', '丧失', '动土', '乔迁', '满月', '丧失', '动土', '乔迁', '满月', '丧失', '动土'],

    hunArr: [
      {
        title: '婚庆',
        hunArticle: [
          {
            article:'今天是个好日子吗？'
          }, 
          {
            article:'今天是个好日子的'
          },
          {
            article: '今天是个好日子的'
          },
          {
            article: '今天是个好日子的'
          },
          {
            article: '今天是个好日子的'
          },
          {
            article: '今天是个好日子的'
          }
        ]
      },

      {
        title: '乔迁',
        hunArticle: [
          {
            article: '今天是个好日子吗？'
          },
          {
            article: '今天是个好日子的今天是个好日子的今天是个好日子的'
          }
        ]
      },

      {
        title: '满月',
        hunArticle: [
          {
            article: '满月祝福语'
          },
          {
            article: '满月祝福语满月祝福语满月祝福语满月祝福语'
          }
        ]
      }
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var self = this;
    // self.setData({
    //   hunArticle: self.hunArr.hunArticle.Join('\n')
    // });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})