import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from '../schemas/course.schema';
import mongoose, { Model } from 'mongoose';


@Injectable()
export class CourseService {

constructor(@InjectModel(Course.name) private courseModel: mongoose.Model<Course>) {}

    addCourse(): string {
    try {
        return 'addCourse';
    } catch (error) {
        console.log("error",error)
    }
}
}
