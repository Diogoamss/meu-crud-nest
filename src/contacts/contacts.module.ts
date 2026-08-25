import { Module } from '@nestjs/common';
import { AppController } from './contacts.controller';
import { AppService } from '../contacts.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
