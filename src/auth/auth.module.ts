import { Module } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from 'src/schemas/blog.schema';
import { UserSchema } from 'src/schemas/user.schema';

@Module({
    imports: [MongooseModule.forFeature([{name:"User", schema:UserSchema}])],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService],
})
export class AuthModule {
    constructor(private authService: AuthService) {}

}
