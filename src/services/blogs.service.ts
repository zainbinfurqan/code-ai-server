import { Body, Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Blog } from 'src/schemas/blog.schema';

@Injectable()
export class BlogsService {

constructor(@InjectModel(Blog.name) private blogModel: mongoose.Model<Blog>) {}

   async getBlogs(): Promise<Blog[]> {
        return await this.blogModel.find({});
    }

    async getBlogById(id:string): Promise<Blog> {
        return await this.blogModel.findById(id);
    }

    async createBlog(body: any): Promise<Blog> { 
        const createBlog =  new this.blogModel({...body});
        return await createBlog.save();
    }

   async  updateBlogById(id: string, body: {}): Promise<Blog>  {
        return await this.blogModel.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        })
    }

   async  deleteBlogById(id: string): Promise<Blog> {
        return await this.blogModel.findByIdAndDelete(id)
    }
}
