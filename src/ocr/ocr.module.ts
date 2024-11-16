import { Module } from '@nestjs/common';
import { OcrService } from './ocr.service';

/**
 * Internal library to extract data from files using OCR.
 */
@Module({
  providers: [OcrService],
  exports: [OcrService]
})
export class OcrModule {}
