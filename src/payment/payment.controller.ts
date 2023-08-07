import { Controller, Post } from '@nestjs/common';
import { PaymentService } from 'src/services/payment.service';

@Controller('payment')
export class PaymentController {
    constructor(private paymentService:PaymentService){}

    @Post()
    login(): Promise<string>{
        return this.paymentService.payment();
    }
}
