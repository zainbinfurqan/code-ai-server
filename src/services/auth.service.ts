import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import mongoose, { Model } from 'mongoose';


@Injectable()
export class AuthService {

constructor(@InjectModel(User.name) private userModel: mongoose.Model<User>) {}

   async login(): Promise<User> {
    try {
        const createdUser = new this.userModel({
            fullName:'zain',
            email: 'zain@gmail.com'
        });
        return createdUser.save();
    } catch (error) {
        console.log("error",error)
    }
}

    signUp(): string {
        return 'signUp';
    }

    updateProfile(): string {
        return 'updateProfile';
    }

}
