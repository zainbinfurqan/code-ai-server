

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

@Schema()
export class Blog {
  @Prop()
  user: string;

  @Prop()
  text: string;

  @Prop()
  heading: boolean;

  @Prop()
  banner: string;

  @Prop()
  images: [string];

  @Prop()
  likes: number;

  @Prop()
  comments: {}[];

}

export const BlogSchema = SchemaFactory.createForClass(Blog);