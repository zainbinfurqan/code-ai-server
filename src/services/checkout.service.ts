import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Checkout } from '../schemas/checkout.schema';
import mongoose, { Model } from 'mongoose';


@Injectable()
export class CheckoutService {

constructor(@InjectModel(Checkout.name) private userModel: mongoose.Model<Checkout>) {}

async checkout(): Promise<string> {
    try {
       return "checkout"
    } catch (error) {
        console.log("error",error)
    }
}

}
