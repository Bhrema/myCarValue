import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true //faz com que seja impossível adicionar outros campos num request, nesse exemplo: email e passw apenas
    })
  )
  await app.listen(3000);
}
bootstrap();
