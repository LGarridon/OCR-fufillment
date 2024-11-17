import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OcrModule } from './ocr/ocr.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [OcrModule, ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
