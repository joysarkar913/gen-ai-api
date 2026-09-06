import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors({
  //   // Replace with the exact frontend URL allowed to access the API
  //   origin: 'engineer-joy.web.app', // e.g. React, Next.js, or Vite dev server
  //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
  //   credentials: true,
  // });
  await app.listen(process.env.PORT ??3000);
}
await bootstrap();
