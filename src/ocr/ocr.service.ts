import { Injectable } from '@nestjs/common';

/**
 * Allows getting text from images.
 */
@Injectable()
export class OcrService {

    /**
     * Gets the text from a image.
     * @param file
     *   Image
     * @returns 
     */
    public extractTextFromImagee(file: Express.Multer.File) : string {
        return 'Text';
    }

}
