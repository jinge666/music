// pages/video/video.js
import request from '../../untils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videGroupList:[],
    navId:'',
    videoListData:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getVideoGroupList()
  },
   async getVideoGroupList(){
     let res = await request('/video/group/list')
     this.setData({
      videGroupList:res.data.slice(0,20),
      navId:res.data[0].id
     })
     this.getVideoList(this.data.navId)
   },
   async getVideoList(navId){
    let videoListData = await request('/video/group',{id:navId})
    wx.hideLoading();
    let videoList = videoListData.datas.map((item,index) => {
      item.id = index
      return item
    })
    this.setData({
      videoListData:videoList
    })
  },
   changeNav(event){
     let NavId = event.currentTarget.id
     this.setData({
       navId:NavId*1,
       videoListData:[]
     })
     wx.showLoading({
       title: '正在加载中',
     })
     this.getVideoList(this.data.navId)
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