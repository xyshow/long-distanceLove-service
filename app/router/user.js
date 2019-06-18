'use script'

module.exports = app => {
  const { projectApi } = app.config.api;
  // app.router.resources('user', `${projectApi}/users`, app.controller.user);
  app.router.post(`${projectApi}/user/create`, app.controller.user.index.create)

}
