//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '鲜花祝福助手',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    flowerNames: [
      {
        name: "玫瑰"
      },
      {
        name: "百何"
      },
      {
        name: "菊花"
      },
      {
        name: "勿忘我"
      },
      {
        name: "菊花"
      },
      {
        name: "勿忘我"
      },
      {
        name: "荔枝"
      },
      {
        name: "百何"
      },
      {
        name: "菊花"
      }
    ],
    flowerArr: [
      {
        title: '白玫瑰',
        tag:"爱情",
        src: '/images/flower.jpg'
      },
      {
        title: '白玫瑰',
        tag: "爱情",
        src: '/images/flower.jpg'
      },
      {
        title: '白玫瑰',
        tag: "爱情",
        src: '/images/flower.jpg'
      },
      {
        title: '白玫瑰',
        tag: "爱情",
        src: '/images/flower.jpg'
      },
      {
        title: '白玫瑰',
        tag: "爱情",
        src: '/images/flower.jpg'
      },
      {
        title: '白玫瑰',
        tag: "爱情",
        src: '/images/flower.jpg'
      },
      {
        title: '勿忘我',
        tag: "情感",
        src: '/images/flower.jpg'
      },
      {
        title: '黄菊',
        tag: "奋斗",
        src: '/images/flower.jpg'
      }
    ],
    articleArr: [
      {
        title: '玫瑰花怎么种植？'
      },
      {
        title: '在广东地方的玫瑰花怎么种植？'
      },
      {
        title: '蓝色玫瑰花怎么种植？提高存活率标题过长提高存活率标题过长提高存活率标题过长提高存活率标题过长'
      },
      {
        title: '玫瑰花怎么种植？'
      },
      {
        title: '玫瑰花怎么种植？'
      }
    ],
    newsArr: [
      {
      newsTitle : "成都首批玫瑰花已经上市，销售量达400W",
      },
      {
        newsTitle: "成都首批玫瑰花已经上市，销售量达400W",
      },
      {
        newsTitle: "成都首批玫瑰花已经上市，销售量达400W",
      }
    ]
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 点击跳转 进入鲜花详情页
  toDetails:function(e){
    // var index = e.currentTarget.dataset.index;
    // console.log(index);
    // var id = urls.

    wx.navigateTo({
      url: '/details/flower/flower',
      success: function () {},       //成功后的回调；
      fail: function () {},         //失败后的回调；
      complete: function () { }      //结束后的回调(成功，失败都会执行)
    })
  },



  // 进入文章详情页
  toArticle: function (e) {
    var title = e.currentTarget.dataset.title;

    // 携带参数获取当前页面
    wx.navigateTo({
      url: '/details/article/article?title=' + title,
      success: function () { },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }      //结束后的回调(成功，失败都会执行)
    })
  },


  // 进入资讯详情页
  toNews: function (e) {
    // console.log(e.currentTarget.articleArr)
    wx.navigateTo({
      url: '/details/news/news',
      success: function () { },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }      //结束后的回调(成功，失败都会执行)
    })
  },

  // 侧栏菜单点击
  onSelect: function(e){
    console.log(this.data[1])

    this.setData({
      flowerArr:[
        {
          title: '蓝玫瑰',
          tag:"爱情",
          src: '/images/flower.jpg'
        },
        {
          title: '蓝玫瑰',
          tag: "爱情",
          src: '/images/flower.jpg'
        }
      ],
      articleArr:"",
      newsArr:"",

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
  }
})
