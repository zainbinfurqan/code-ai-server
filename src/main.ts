import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import MongoDBConnection from './connections/MongoDB'
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
  // console.log("MongoDBConnection",MongoDBConnection)
//  await  MongoDBConnection()
}
bootstrap();
