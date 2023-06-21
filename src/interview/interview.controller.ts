import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('interview')
export class InterviewController {

    @Get()
    getInterviews(): string {
        return 'This action returns all cats';
    }

    @Get(':id')
    getInterviewsById(): string {
        return 'This action returns all cats';
    }

    @Post()
    createInterview(): string {
        return 'This action returns all cats';
    }

    @Delete()
    deleteInterview(): string {
        return 'This action returns all cats';
    }
}
