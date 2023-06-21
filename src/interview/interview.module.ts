import { Module } from '@nestjs/common';
import { InterviewController } from './interview.controller';
import { InterviewsService } from 'src/services/interview.service';
import { MongooseModule } from '@nestjs/mongoose';
import { InterviewSchema } from 'src/schemas/interview.schema';

@Module({
    imports: [MongooseModule.forFeature([{name:"Interview", schema:InterviewSchema}])],
    controllers: [InterviewController],
    providers: [InterviewsService]
})
export class InterviewModule {
   
}
