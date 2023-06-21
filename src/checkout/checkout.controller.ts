import { Controller } from '@nestjs/common';
import { CheckoutService } from 'src/services/checkout.service';

@Controller('checkout')
export class CheckoutController {
    constructor(private checkoutService:CheckoutService){}

}
