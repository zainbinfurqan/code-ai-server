import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('blogs')
export class BlogsController {

    @Get()
    getBlogs(): string {
        return 'This action returns all cats';
    }

    @Get(':id')
    getBlogById(): string {
        return 'This action returns all cats';
    }

    @Post()
    CreateBlog(): string {
        return 'This action returns all cats';
    }

    @Put(':id')
    approveBlogById(): string {
        return 'This action returns all cats';
    }

    @Delete()
    deleteBlog(): string {
        return 'This action returns all cats';
    }

}
