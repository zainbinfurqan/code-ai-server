import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from '../schemas/course.schema';
import mongoose, { Model } from 'mongoose';


@Injectable()
export class SearchService {

constructor(
    @InjectModel(Course.name) private courseModel: mongoose.Model<Course>,
    ) {}

    searchCourses(): string {
    try {
        // const createdUser = new this.userModel({
        //     fullName:'zain',
        //     email: 'zain@gmail.com'
        // });
        // return createdUser.save();
        return '';
    } catch (error) {
        console.log("error",error)
    }
}
}
