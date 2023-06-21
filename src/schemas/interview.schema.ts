
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type InterviewDocument = HydratedDocument<Interview>;

@Schema()
export class Interview {
  @Prop()
  user: string;

  @Prop()
  link: string;

  @Prop()
  isPasswordProtected: boolean;

  @Prop()
  isActive: boolean;

}

export const InterviewSchema = SchemaFactory.createForClass(Interview);