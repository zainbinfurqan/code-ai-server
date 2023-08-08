import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from '../schemas/order.schema';
import mongoose, { Model } from 'mongoose';


@Injectable()
export class OrdersService {

constructor(@InjectModel(Order.name) private userModel: mongoose.Model<Order>) {}

    async confirmOrder(): Promise<string> {
        try {
            return "confirmOrder"
        } catch (error) {
            console.log("error",error)
        }
    }

}
