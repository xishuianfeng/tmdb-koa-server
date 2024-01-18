const getMovieList = require('../api/getMovieList');
// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();


router.get('/movie/top_rated', async (ctx, next) => {
  const response = await getMovieList.getTopRated()
  ctx.response.body = response;
  console.log(response.page);
  await next();
});

router.get('/movie/popular', async (ctx, next) => {
  const response = await getMovieList.getPopular()
  ctx.response.body = response;
  console.log(response.page);
  await next();
});

router.get('/movie/upcoming', async (ctx, next) => {
  const response = await getMovieList.getUpcoming()
  ctx.response.body = response;
  console.log(response.page);
  await next();
});

module.exports = router;