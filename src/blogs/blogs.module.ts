import { Module } from '@nestjs/common';
import { BlogsController } from './blogs.controller';
import { BlogsService } from 'src/services/blogs.service';
import { BlogSchema } from 'src/schemas/blog.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{name:"Blog", schema:BlogSchema}])],
    controllers: [BlogsController],
    providers: [BlogsService]
})
export class BlogsModule {}
