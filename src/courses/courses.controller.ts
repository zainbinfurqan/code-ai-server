import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
    @Post()
    addCourse(): string {
        return 'This action returns all cats';
    }
  
    @Get()
    getAllCourses(): string {
        return 'This action returns all cats';
    }
  
    @Get()
    getCourseDetailById(): string {
        return 'This action returns all cats';
    }

    @Put()
    updateCourse(): string {
        return 'This action returns all cats';
    }
  
    @Delete()
    deleteCourse(): string {
        return 'This action returns all cats';
    }
}
