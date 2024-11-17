import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { OcrModule } from 'src/ocr/ocr.module';

/**
 * Set of endpoints that the apps will request.
 */
@Module({
  controllers: [ApiController],
  imports: [OcrModule]
})
export class ApiModule {}
