import { Injectable } from '@nestjs/common';
import { createWorker } from 'tesseract.js';
import { writeFileSync } from 'fs';

/**
 * Allows getting text from images.
 */
@Injectable()
export class OcrService {

    /**
     * Gets a tesseract.js worker that extracts image from text.
     */
    tesseractWorker;

    /**
     * Constructs the OCR service.
     */
    constructor() {
        this.initializeWorker()
    }

    /**
     * Initialize tesseract worker.
     */
    async initializeWorker() {
        this.tesseractWorker = await createWorker(['spa', 'eng']);
    }

    /**
     * Generates a file name that will be used
     * to store files.
     *
     * @returns string
     *   File name.
     */
    protected generateFileName() : string {
        return '.temp/' + (Math.random() + 1).toString(36).substring(2) + '.png';
    }

    /**
     * Saves the file into a temporary folder with a temporary filename.
     *
     * @param file
     *   The file.
     *
     * @returns string
     *   Filename.
     */
    protected saveFile(file: Express.Multer.File) {
        let fileName = this.generateFileName();
        writeFileSync(fileName, file.buffer);
        return fileName;
    }

    /**
     * Gets the text from a image.
     *
     * @param file
     *   Image.
     *
     * @returns 
     */
    async extractTextFromImage(file: Express.Multer.File) : Promise<string> {
        let fileName = this.saveFile(file);
        return this.tesseractWorker.recognize(fileName).then(function (result) {
            return result.data.text;
        });
    }

}
