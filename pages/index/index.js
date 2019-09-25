const app = getApp()

Page({
  data: {
    currentTab: 0,
    coverIsShow: false,
    showDetail: true
  },
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数

  },
  //滑动切换
  swiperTab: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  //打开详细
  checkDetail: function() {
    var that = this;

    that.setData({
      coverIsShow: !that.data.coverIsShow,
      showDetail: !that.data.showDetail
    })
  },
  //多选文件
  selectFile:function(){
    
  }
})