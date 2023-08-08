import { Controller, Post } from '@nestjs/common';
import { PaymentService } from 'src/services/payment.service';

@Controller('payment')
export class PaymentController {
    constructor(private paymentService:PaymentService){}

    @Post()
    initiatePayment(): Promise<string>{
        return this.paymentService.initiatePayment();
    }

    @Post()
    confirmPayment(): Promise<string>{
        return this.paymentService.confirmPayment();
    }

}
