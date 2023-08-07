import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentSchema } from 'src/schemas/payment.schema';
import { PaymentController } from './payment.controller';
import { PaymentService } from 'src/services/payment.service';

@Module({
    imports: [MongooseModule.forFeature([{name:"Payment", schema:PaymentSchema}])],
    controllers: [PaymentController],
    providers: [PaymentService],
    exports: [PaymentService],
})
export class PaymentModule {
  constructor(private paymentService: PaymentService) {}

}
