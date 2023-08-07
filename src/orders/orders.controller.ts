import { Controller, Post } from '@nestjs/common';
import { OrdersService } from 'src/services/orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private ordersService:OrdersService){}

    @Post()
    login(): Promise<string>{
        return this.ordersService.placeOrder();
    }
}
