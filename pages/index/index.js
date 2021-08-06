// pages/index/index.js
import request from '../../untils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
       banner:[], //轮播图数据
       recommendList:[],  //推荐数据
       toplist:[],  //排行榜歌单
  },
  method:{
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 获取轮播图数据
    const res = await request('/banner',{type:2});
    this.setData({
      banner : res.banners,
    })
    console.log(res);
    // 获取推荐歌曲数据
    const res1 = await request('/personalized',{limit:10});
    this.setData({
      recommendList:res1.result
    })
    // 获取排行榜歌曲数据
    let index = 0;
    let resArr = [];
    while(index < 5){
      let res = await request('/top/list',{idx:index++});
      // console.log(res)
      let topListItem = {name:res.playlist.name,tracks:res.playlist.tracks.slice(0,3)};
      resArr.push(topListItem);
      console.log(resArr)
      this.setData({
         toplist:resArr
      })
    }
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