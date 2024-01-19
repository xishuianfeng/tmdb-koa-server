const getMovieList = require('../api/getMovieList');
const getMovieDetail = require('../api/getMovieDetail');
// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();


router.get('/movie/top_rated/:page', async (ctx, next) => {
  const page = ctx.params.page;
  const response = await getMovieList.getTopRated(page)
  ctx.response.body = response;
  await next();
});

router.get('/movie/popular/:page', async (ctx, next) => {
  const page = ctx.params.page;
  const response = await getMovieList.getPopular(page)
  ctx.response.body = response;
  await next();
});

router.get('/movie/upcoming/:page', async (ctx, next) => {
  const page = ctx.params.page;
  const response = await getMovieList.getUpcoming(page)
  ctx.response.body = response;
  await next();
});

// 电影详细数据
router.get('/movie/:id', async (ctx, next) => {
  const id = ctx.params.id;
  const response = await getMovieDetail(id)
  ctx.response.body = response;
  await next();
});


module.exports = router;