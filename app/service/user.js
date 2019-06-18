'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async create() {
    const { ctx } = this;
    // 创建用户
    return true;

  }
}

module.exports = UserService;
