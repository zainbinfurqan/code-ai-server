import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Blog } from 'src/schemas/blog.schema';

@Injectable()
export class BlogsService {

constructor(@InjectModel(Blog.name) private blogModel: mongoose.Model<Blog>) {}

    getBlogs(): string {
        return 'getBlogs';
    }

    getBlogById(): string {
        return 'getBlogById';
    }

    createBlog(): Promise<Blog> { 
        
        const createBlog = new this.blogModel({});
    return createBlog.save();
    }

    updateBlogById(): string {
        return 'updateBlogById';
    }

    deleteBlogById(): string {
        return 'deleteBlogById';
    }
}
