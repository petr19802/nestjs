import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000', 'http://91.103.252.147:3000'], // Разрешенные источники
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Разрешенные методы
    credentials: true, // Разрешить отправку куки и авторизационных заголовков
  });
  await app.listen(process.env.PORT ?? 5432);
}
bootstrap();
