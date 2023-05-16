import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(
    process.env.PORT || 3333,
    process.env.IN_CONTAINER === '1' ? '0.0.0.0' : '127.0.0.1',
  );
}
bootstrap();
