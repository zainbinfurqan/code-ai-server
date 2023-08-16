import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SearchController } from './search.controller';
import { CourseService } from 'src/services/course.service';
import { CourseSchema } from 'src/schemas/course.schema';

@Module({
    imports: [MongooseModule.forFeature([{name:"Course", schema:CourseSchema}])],
    controllers: [SearchController],
    providers: [CourseService]
})
export class SearchModule {}
