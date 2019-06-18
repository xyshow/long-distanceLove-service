
module.exports = app => {
  app.once('server', server => {
    // websocket
    console.log('构建完成');
    // 查询是否有数据库love_test数据库
    // await app.mysql.query('show databases;');
    // const user = await app.mysql.query('select * from users','');
    // console.log('app.mysql:', app.mysql);

  });
  app.on('error', (err, ctx) => {
    // report error
    console.log('捕捉到一个错误', err);
  });
  app.on('request', ctx => {
    // log receive request
    console.log('有个请求', ctx.request);
  });
  app.on('response', ctx => {
    // ctx.starttime is set by framework
    const used = Date.now() - ctx.starttime;
    // log total cost
  });
};