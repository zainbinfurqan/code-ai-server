import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Blog } from 'src/schemas/blog.schema';
import { BlogsService } from 'src/services/blogs.service';

@Controller('blogs')
export class BlogsController {

    constructor(private blogService:BlogsService){}

    @Get()
    async  getBlogs(): Promise<Blog[]> {
        return await this.blogService.getBlogs();
    }

    @Get(':id')
    async getBlogById(@Param('id') id: string):  Promise<Blog>  {
        return await this.blogService.getBlogById(id);
    }

    @Post()
   async CreateBlog(@Body() body: any):  Promise<Blog> {
        return await this.blogService.createBlog(body);
    }

    @Put(':id')
   async approveBlogById(@Param('id') id: string, @Body() body: any): Promise<Blog> {
        return await this.blogService.updateBlogById(id, body);
    }

    @Delete()
    async  deleteBlog(@Param('id')id : string):  Promise<Blog> {
        return await this.blogService.deleteBlogById(id);
        
    }

}
