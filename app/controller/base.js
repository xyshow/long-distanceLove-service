'use strict';
module.exports = {

  /**
   * 返回json数据
   * @param {*} obj 
   * @param {*} ctx 
   */
  sendJson: (obj, ctx) => {
    ctx.type = 'application/json';
    ctx.body = JSON.stringify({ message: '', data: obj, code: 0 });
  },

  /**
   * 判断是否为空
   * @param {*String} str 
   */
  isNull: (str) => {
    if (!str || str === null || str === undefined) {
      return true;
    }
  },

  /**
   * 返回错误信息给前端
   * @param {*String} errorStr 
   * @param {*} ctx 
   */
  error: (errorStr, ctx) => {
    ctx.type = 'application/json';
    ctx.body = JSON.stringify({ message: errorStr, code: -1 });
  },

  /**
   * 获取时间戳
   * @returns {Number}
   */
  getTime: () => {
    return parseInt(Date.now() / 1000);
  }

}
