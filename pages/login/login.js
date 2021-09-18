// pages/login/login.js
import request from '../../untils/request'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    password:'',
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleInput(event){
    this.setData({
      [event.currentTarget.dataset.type] : event.detail.value
    })
  },
  async login(){
    let phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
    if(!this.data.phone){
      wx.showToast({
        title:'手机号不能为空',
        icon:'error'
      })
      return
    }
    if(!phoneReg.test(this.data.phone)){
      wx.showToast({
        title: '手机格式不正确',
        icon:'error'
      })
      return
    }
    if(!this.data.password){
      wx.showToast({
        title: '密码不能为空',
        icon:'error'
      })
    }
    else{
      let res = await request ('/login/cellphone',{ phone:this.data.phone, password:this.data.password, isLogin:true})
      if(res.code === 200){
        wx.setStorageSync('userInfo', res.profile)
        wx.showToast({
          title: '登录成功',
          icon:'success'
        })
        wx.reLaunch({
          url: '/pages/personal/personal',
        })
      }else if(res.code === 400){
        wx.showToast({
          title: '手机号错误',
          icon:'error'
        })
      }else if(res.code === 502){
        wx.showToast({
          title: '密码错误',
          icon:'error'
        })
      }else {
        wx.showToast({
          title: '登录失败，请重新输入',
          icon:'error'
        })
      }
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