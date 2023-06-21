import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Interview } from 'src/schemas/interview.schema';

@Injectable()
export class InterviewsService {

constructor(@InjectModel(Interview.name) private interviewModel: mongoose.Model<Interview>) {}

  async getInterviewsByUserId(): Promise<Interview[]> {
    const interviews = await this.interviewModel.find({});
        return interviews; 
    }

    getInterviewsByInterviewId(): string {
        return 'getInterviewsByInterviewId';
    }

    createInterview(): Promise<Interview> {
        const createInterview = new this.interviewModel({});
        return createInterview.save();
    }

}
