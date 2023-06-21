import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {

    getInterviewsByUserId(): string {
        return 'getInterviewsByUserId';
    }

    getInterviewsByInterviewId(): string {
        return 'getInterviewsByInterviewId';
    }

    createInterview(): string {
        return 'createInterview';
    }

}
