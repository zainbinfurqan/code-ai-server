
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CheckoutDocument = HydratedDocument<Checkout>;

@Schema()
export class Checkout {
  @Prop()
  user: string;

}

export const CheckoutSchema = SchemaFactory.createForClass(Checkout);