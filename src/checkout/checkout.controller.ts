import { Controller, Post } from '@nestjs/common';
import { CheckoutService } from 'src/services/checkout.service';

@Controller('checkout')
export class CheckoutController {
    constructor(private checkoutService:CheckoutService){}

    @Post()
    checkout(): Promise<string>{
        return this.checkoutService.checkout();
    }
}
