import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ExpressAdapter } from '@nestjs/platform-express'; 
import express from 'express';

async function bootstrap() {
  const expressApp = express();
  const app = await NestFactory.create(AppModule,new ExpressAdapter(expressApp));
  app.enableCors({
    // Replace with the exact frontend URL allowed to access the API
    origin: 'engineer-joy.web.app', // e.g. React, Next.js, or Vite dev server
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });
  await app.init(); 
  return expressApp;
}
const handler = bootstrap();
export default handler;

