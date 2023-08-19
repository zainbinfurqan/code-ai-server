import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import MongoDBConnection from './connections/MongoDB'
import { ValidationPipe } from '@nestjs/common';
// import { WsAdapter } from '@nestjs/platform-socket.io';
import * as socketIo from 'socket.io';
import { createServer } from 'http';
import { IoAdapter } from '@nestjs/platform-socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const httpServer = createServer(app.getHttpAdapter().getInstance());
  const io = new socketIo.Server(httpServer,{path: '/socket.io',});

  app.useWebSocketAdapter(new IoAdapter(io));

  app.enableCors({
    origin: 'http://localhost:3000/',
  });
  app.useGlobalPipes(new ValidationPipe());
  app.listen(3001,()=>{console.log("3001")});
  // console.log("MongoDBConnection",MongoDBConnection)
//  await  MongoDBConnection()
}
bootstrap();
