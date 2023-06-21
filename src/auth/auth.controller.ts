import { Controller, Post, Put } from '@nestjs/common';
import { Auth } from 'mongodb';
import { AuthService } from 'src/services/auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authSerive:AuthService){}

    @Post()
    login(): Promise<Auth> {
        return this.authSerive.login();
    }

    @Post(':id')
    signUp(): string {
        return 'This action returns all cats';
    }

    @Put()
    forgetPassword(): string {
        return 'This action returns all cats';
    }

    @Put()
    resetPassword(): string {
        return 'This action returns all cats';
    }

    @Put()
    updateProfile(): string {
        return 'This action returns all cats';
    }

    @Put()
    updateRewareds(): string {
        return 'This action returns all cats';
    }
    
}
