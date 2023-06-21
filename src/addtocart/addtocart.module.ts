import { Module } from '@nestjs/common';
import { AddtocartController } from './addtocart.controller';

@Module({
  controllers: [AddtocartController]
})
export class AddtocartModule {}
