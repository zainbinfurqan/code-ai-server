import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('notification')
export class NotificationController {

    @Get()
    getNotificationByUserId(): string {
        return 'This action returns all cats';
    }

    @Get(':id')
    getNotification(): string {
        return 'This action returns all cats';
    }

    @Post()
    createInterview(): string {
        return 'This action returns all cats';
    }

    @Put()
    readNotification(): string {
        return 'This action returns all cats';
    }
}
