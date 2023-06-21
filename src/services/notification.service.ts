import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Notification } from 'src/schemas/notification.schema';

@Injectable()
export class NotificationService {

constructor(@InjectModel(Notification.name) private notificationModel: mongoose.Model<Notification>) {}


    getAllNotification(): string {
        return 'getInterviewsByUserId';
    }

    getInterviewsByNotificationId(): string {
        return 'getInterviewsByInterviewId';
    }

    createNotification(): Promise<Notification> {
        const createNotification = new this.notificationModel({});
        return createNotification.save();
    }

}
