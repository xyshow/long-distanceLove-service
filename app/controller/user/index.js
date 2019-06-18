'use strict'
const Controller = require('egg').Controller;
const base = require('../base');

class UserController extends Controller {
  async index () {};
  async create () {
    const { ctx } = this;
    try {
      const req = await ctx.service.user.create;
      base.sendJson(req, ctx);
    } catch (err) {
      base.error(err, ctx);
    }
    
  }
}
module.exports = UserController;