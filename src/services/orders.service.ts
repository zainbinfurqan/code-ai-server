import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from '../schemas/order.schema';
import mongoose, { Model } from 'mongoose';


@Injectable()
export class OrdersService {

constructor(@InjectModel(Order.name) private userModel: mongoose.Model<Order>) {}

 async placeOrder(): Promise<string> {
    try {
       return "order"
    } catch (error) {
        console.log("error",error)
    }
}

}
