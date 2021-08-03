import config from './config.js'

export default (url,data={},method="GET") => {
  return new Promise((resolve,reject) => {
    wx.request({
      url:config.host + url,
      data,
      success:(res) => {
        resolve(res.data);
      },
      fail:(err) => {
        reject(err);
      }
    })
  })
}