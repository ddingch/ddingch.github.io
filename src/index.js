import dotenv from 'dotenv';
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import api from './api/index.js';
import mongoose from 'mongoose';
import jwtMiddleware from './lib/jwtMiddleware.js';
import serve from 'koa-static';
import path from 'path';
import send from 'koa-send';
import cors from '@koa/cors';

dotenv.config();

const app = new Koa();
const router = new Router();
const port = process.env.PORT || 4000;
const CLIENT_URL = process.env.REACT_APP_CLIENT_URL;

mongoose
  .set('strictQuery', true)
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((e) => {
    console.error(e);
  });

//cors 설정
const corsOptions = {
  origin: CLIENT_URL,
  allowMethods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  credentials: true,
  exposeHeaders: ['last-page'], //커스텀헤더는 여기에 추가
};

app.use(cors(corsOptions));

app.use((ctx, next) => {
  ctx.cookies.secure = true;
  return next();
});

//라우터 설정
router.use('/api', api.routes()); // api 라우트 적용

//라우터 적용 전에 bodyParser 적용
app.use(bodyParser());
app.use(jwtMiddleware);

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

const __dirname = path.resolve();

const buildDirectory = path.join(__dirname, 'client', 'build');

app.use(serve(buildDirectory));
app.use(async (ctx) => {
  //Not Found이고, 주소가 /api로 시작하지 않는 경우
  if (ctx.status === 404 || ctx.path.indexOf('/api') !== 0) {
    //index.html 내용 반환
    await send(ctx, 'index.html', {
      root: buildDirectory,
    });
  }
});

app.listen(port, () => console.log('listening to port', port));
