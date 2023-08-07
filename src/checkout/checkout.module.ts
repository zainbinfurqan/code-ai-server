import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CheckoutController } from './checkout.controller';
import { CheckoutService } from 'src/services/checkout.service';
import { CheckoutSchema } from 'src/schemas/checkout.schema';

@Module({
    imports: [MongooseModule.forFeature([{name:"Checkout", schema:CheckoutSchema}])],
    controllers: [CheckoutController],
    providers: [CheckoutService],
    exports: [CheckoutService],
})
export class CheckoutModule {
  constructor(private checkoutService: CheckoutService) {}
}
