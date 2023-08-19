import { Body, Controller, Delete, Get, Post, Put, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('courses')
export class CoursesController {
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    addCourse( @UploadedFile() file: Express.Multer.File ,@Body() data: any){
        try {
        const otherFields = JSON.parse(data.otherData); // Parse the JSON string
            console.log(otherFields)
            console.log(file)
            return 'This action returns all addCourse';
        
        } catch (error) {
            console.log(error)
        }
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
