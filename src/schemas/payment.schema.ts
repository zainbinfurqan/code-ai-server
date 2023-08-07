import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type Paymentocument = HydratedDocument<Payment>;

@Schema()
export class Payment {
  @Prop()
  fullName: string;

}

export const PaymentSchema = SchemaFactory.createForClass(Payment);