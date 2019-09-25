const app = getApp()

Page({
  data: {
    currentTab: 0,
    coverIsShow: false,
    showDetail: true,
    showView: true,
    src: {
      word: '../../images/fileType/word.png',
      excel: '../../images/fileType/excel.png',
      gif: '../../images/fileType/gif.png',
      jpg: '../../images/fileType/jpg.png',
      pdf: '../../images/fileType/pdf.png'
    },
    files: [{
        id: 1,
        name: 'WORD文件',
        type: 'word',
        time: '2019-10-25',
        imgPath: '../../images/fileType/word.png'
      },
      {
        id: 2,
        name: 'EXCEL文件',
        type: 'excel',
        time: '2019-10-25',
        imgPath: '../../images/fileType/excel.png'

      },
      {
        id: 3,
        name: 'gif文件',
        type: 'gif',
        time: '2019-10-25',
        imgPath: '../../images/fileType/gif.png'
      },
      {
        id: 4,
        name: '狗狗.jpg',
        type: 'jpg',
        time: '2019-10-25',
        imgPath: '../../images/fileType/jpg.png',
        path: 'https://s2.ax1x.com/2019/09/25/uZrzdS.jpg'
      },
      {
        id: 5,
        name: 'pdf文件',
        type: 'pdf',
        time: '2019-10-25',
        imgPath: '../../images/fileType/pdf.png'
      },
    ],

    viewType:'list'

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
  selectFile: function() {

  },
  openImage: function(e) {

    var path = e.currentTarget.dataset.path;
    var paths = [];
    paths.push(path);
    console.log(paths);

    wx.previewImage({
      //current: paths // 当前显示图片的http链接
      urls: paths // 需要预览的图片http链接列表
    })
  },
  //视图选项
  checkView: function() {
    var that = this;
    that.setData({
      coverIsShow: !that.data.coverIsShow,
      showView: !that.data.showView
    })
  },
  //点击蒙层关闭各选项
  closeView: function() {
    var that = this;
    that.setData({
      coverIsShow: false,
      showDetail: true,
      showView: true
    })
  }
})