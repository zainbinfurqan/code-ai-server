import {  Module  } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesController } from './courses.controller';
import { CourseService } from 'src/services/course.service';
import { CourseSchema } from 'src/schemas/course.schema';

@Module({
  imports: [MongooseModule.forFeature([{name:"Course", schema:CourseSchema}])],
  controllers: [CoursesController],
  providers: [CourseService]
})
export class CoursesModule {
  constructor(private courseService: CourseService) {}
 
}
