import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { OcrService } from '../ocr/ocr.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileValidatorPipe } from './pipes/filevalidator.pipe';

/**
 * Endpoint that receives an image and returns the found text.
 */
@Controller('api/image-to-text')
export class ApiController {

    /**
     * Constructs the controller.
     * @param ocrRecognition 
     */
    constructor(private readonly ocrRecognition: OcrService) {}

    /**
     * Extracts the text from a image.
     *
     * @param file 
     *   File. It must be an image.
     *
     * @returns {text: string}
     *   Object returning information from the image.
     */
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    extractTextFromImagee(@UploadedFile(
        new FileValidatorPipe(),
    ) file: Express.Multer.File) : object {
        return {
            text: this.ocrRecognition.extractTextFromImage(file)
        };
    }

}
