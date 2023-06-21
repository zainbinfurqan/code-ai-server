import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import mongoose, { Model } from 'mongoose';


@Injectable()
export class CheckoutService {

constructor(@InjectModel(User.name) private userModel: mongoose.Model<User>) {}

}
