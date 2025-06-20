import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:4200',
    methods: ['GET','HEAD','PUT','PATCH','POST','DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'], // add any headers you send
    credentials: true,
  });

  const port = 3000;
  await app.listen(port);
  console.log(`NestJS server is running on http://localhost:${port}`);
}
bootstrap();
