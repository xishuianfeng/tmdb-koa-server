const Koa = require('koa');
const fs = require('fs');
const https = require('https');
// 注意require('koa-router')返回的是函数:
const router = require('./router/router');
const sslify = require('koa-sslify').default

const app = new Koa();

app.use(sslify())
// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// add router middleware:
app.use(router.routes());

// 配置ssl
const options = {
    key: fs.readFileSync('./tmdbxifeng.xyz_nginx/tmdbxifeng.xyz.key'),
    cert: fs.readFileSync('./tmdbxifeng.xyz_nginx/tmdbxifeng.xyz_bundle.pem')
};
// 修改启动服务
https.createServer(options, app.callback()).listen(443, () => {
    console.log(`服务运行中`);
});