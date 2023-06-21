import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationSchema } from 'src/schemas/notification.schema';
import { NotificationService } from 'src/services/notification.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{name:"Notification", schema:NotificationSchema}])],
    controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
