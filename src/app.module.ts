import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsService } from './services/blogs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { InterviewsService } from './services/interview.service';
import { NotificationModule } from './notification/notification.module';
import { AuthController } from './auth/auth.controller';
import { InterviewController } from './interview/interview.controller';
import { InterviewModule } from './interview/interview.module';
import { BlogsModule } from './blogs/blogs.module';
import { AuthModule } from './auth/auth.module';
import { logger } from './logger.middleware';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://zainahmed199524:zwu5b9ESI8uGUJRh@cluster0.7esbzyq.mongodb.net/'), AuthModule, NotificationModule , InterviewModule, BlogsModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    
    consumer
      .apply(logger)
      .forRoutes('Blogs');
  }
}
