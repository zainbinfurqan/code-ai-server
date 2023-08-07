import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Payment } from '../schemas/payment.schema';
import mongoose, { Model } from 'mongoose';


@Injectable()
export class PaymentService {

constructor(@InjectModel(Payment.name) private userModel: mongoose.Model<Payment>) {}

async payment(): Promise<string> {
    try {
       return "payment"
    } catch (error) {
        console.log("error",error)
    }
}
}
