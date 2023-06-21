
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type NotificationDocument = HydratedDocument<Notification>;

@Schema()
export class Notification {
  @Prop()
  user: string;

  @Prop()
  text: string;
  
  @Prop()
  link: string;

  @Prop()
  isRead: boolean;

  @Prop()
  hasLink: boolean;

}

export const NotificationSchema = SchemaFactory.createForClass(Notification);