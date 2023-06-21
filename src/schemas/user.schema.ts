import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  fullName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  number: number;

  @Prop()
  isBlocked: boolean;

  @Prop()
  isActivate: boolean;

  @Prop()
  rewards: string;

  @Prop()
  bio: string;

}

export const UserSchema = SchemaFactory.createForClass(User);