import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

const ALLOWED_FILE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/jpg',
];

/**
 * Verifies the image to text endpoint receives correct files.
 */
@Injectable()
export class FileValidatorPipe implements PipeTransform {

  /**
   * Validates the file.
   * 
   * Check the file is processed and it is a image file.
   */
  transform(value: any, metadata: ArgumentMetadata) {
    if (typeof(value) !== 'object') {
      throw new BadRequestException('File required');
    }

    if (!ALLOWED_FILE_TYPES.includes(value.mimetype)) {
      throw new BadRequestException(`Invalid mime type: ${value.mimetype}`);
    }

    return value;
  }

}
